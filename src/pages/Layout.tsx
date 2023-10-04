import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Fonts from "../Fonts";

function Layout() {
  return (
    <>
      <Fonts />
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
