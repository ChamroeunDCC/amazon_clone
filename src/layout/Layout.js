import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileCartButton from "../components/MobileCartButton";
import NavBar from "./NavBar";

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
