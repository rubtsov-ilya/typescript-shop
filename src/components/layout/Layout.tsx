import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.sass";
import Header from "./header/Header.tsx";

export default function Layout() {
  return (
    <>
      <Header />
        <Outlet />

    </>
  );
}
