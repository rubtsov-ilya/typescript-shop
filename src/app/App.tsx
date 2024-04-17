import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./../components/pages/homepage/Homepage.tsx";
import Layout from "./../components/layout/Layout.tsx";
import BodyLockProvider from "../providers/BodyLockProvider.tsx";
import Notfoundpage from "../components/pages/notfoundpage/Notfoundpage.tsx";
import Cartpage from "../components/pages/cartpage/Cartpage.tsx";
import ScrollToTopProvider from "../providers/ScrollToTopProvider.tsx";
import Deliverypage from "../components/pages/deliverypage/Deliverypage.tsx";
import DarkThemeProvider from "../providers/DarkThemeProvider.tsx";

export default function App() {
  return (
    <BodyLockProvider>
      <DarkThemeProvider>
        <BrowserRouter>
          <ScrollToTopProvider />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="cart" element={<Cartpage />} />
              <Route path="delivery" element={<Deliverypage />} />
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkThemeProvider>
    </BodyLockProvider>
  );
}
