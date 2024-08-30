import { FC, useState } from "react"
import ResetPasswordSection from "./reset-password-section/ResetPasswordSection"
import AlertSendedSection from "./alert-sended-section/AlertSendedSection"
import { Navigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

const ResetPasswordPage: FC = () => {
  const {isAuth} = useAuth()
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  const [isMessageSended, setIsMessageSended] = useState<boolean>(false)
  return (
    <>
      {!isMessageSended && <ResetPasswordSection setIsMessageSended={setIsMessageSended} />}
      {isMessageSended && <AlertSendedSection />}
    </>
  )
}

export default ResetPasswordPage
