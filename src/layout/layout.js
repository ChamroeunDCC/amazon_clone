import { Outlet } from "react-router-dom";
import Header from "./header";
import NavBar from "./navbar";
import MobileCartButton from "../components/MobileCartButton";

export default function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <MobileCartButton />
    </div>
  );
}
