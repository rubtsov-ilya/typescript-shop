import { FC } from "react"
import FirstLoginSection from "./first-login-section/FirstLoginSection"
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const LoginPage: FC = () => {
  const {isAuth} = useAuth()
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return (
    <main>
      <FirstLoginSection />
    </main>
  )
}

export default LoginPage
