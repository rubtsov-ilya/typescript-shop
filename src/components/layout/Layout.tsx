import { Outlet } from "react-router-dom";
import Header from "./header/Header.tsx";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <main>
      <Header />
        <Outlet />
    </main>
  )
}

export default Layout