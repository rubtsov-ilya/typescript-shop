import { FC } from "react"
import FirstAccountSection from "./first-account-section/FirstAccountSection"
import SecondAccountSection from "./second-account-section/SecondAccountSection"
import { useGetUserStateQuery } from "../../../redux"
import useAuth from "../../../hooks/useAuth"
import { Navigate } from "react-router-dom"

const AccountPage: FC = () => {
  const {email, isAuth, uMockid} = useAuth()
  const { data: userData = null, isError: isErrorUserData, isLoading: isLoadingUserData } = useGetUserStateQuery({ uMockid: uMockid! }, { skip: uMockid === null })
  const orders = userData ? userData.orders : []

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main>
      <FirstAccountSection email={email!}/>
      <SecondAccountSection orders={orders} isErrorUserData={isErrorUserData} isLoadingUserData={isLoadingUserData}/>
    </main>
  )
}

export default AccountPage