import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/home-page/HomePage.tsx";
import Layout from "./../components/layout/Layout.tsx";
import BodyLockProvider from "../providers/BodyLockProvider.tsx";
import NotfoundPage from "../components/pages/not-found-page/NotfoundPage.tsx";
import ScrollToTopProvider from "../providers/ScrollToTopProvider.tsx";
import DeliveryPage from "../components/pages/delivery-page/DeliveryPage.tsx";
import DarkThemeProvider from "../providers/DarkThemeProvider.tsx";
import ServerErrorProvider from "../providers/ServerErrorProvider.tsx";
import LoginPage from "../components/pages/login-page/LoginPage.tsx";
import RegisterPage from "../components/pages/register-page/RegisterPage.tsx";
import ResetPasswordPage from "../components/pages/reset-password-page/ResetPasswordPage.tsx";
import AuthProvider from "../providers/AuthProvider.tsx";
import AccountPage from "../components/pages/account-page/AccountPage.tsx";



export default function App() {
  return (
    <BodyLockProvider>
      <DarkThemeProvider>
        <ServerErrorProvider>
          <ScrollToTopProvider />
          <AuthProvider />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="delivery" element={<DeliveryPage />} />
              
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="reset-password" element={<ResetPasswordPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="*" element={<NotfoundPage />} />
            </Route>
          </Routes>
        </ServerErrorProvider>
      </DarkThemeProvider>
    </BodyLockProvider>
  );
}
