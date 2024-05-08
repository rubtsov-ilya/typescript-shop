import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/home-page/HomePage.tsx";
import Layout from "./../components/layout/Layout.tsx";
import BodyLockProvider from "../providers/BodyLockProvider.tsx";
import NotfoundPage from "../components/pages/not-found-page/NotfoundPage.tsx";
import CartPage from "../components/pages/cart-page/Cartpage.tsx";
import ScrollToTopProvider from "../providers/ScrollToTopProvider.tsx";
import DeliveryPage from "../components/pages/delivery-page/DeliveryPage.tsx";
import DarkThemeProvider from "../providers/DarkThemeProvider.tsx";
import ServerErrorProvider from "../providers/ServerErrorProvider.tsx";

export default function App() {
  return (
    <BodyLockProvider>
      <DarkThemeProvider>
        <ServerErrorProvider>
          <ScrollToTopProvider />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="delivery" element={<DeliveryPage />} />
              <Route path="*" element={<NotfoundPage />} />
            </Route>
          </Routes>
        </ServerErrorProvider>
      </DarkThemeProvider>
    </BodyLockProvider>
  );
}
