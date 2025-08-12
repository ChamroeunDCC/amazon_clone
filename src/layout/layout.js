import { Outlet } from "react-router-dom";
import Header from "./header";
import NavBar from "./navbar";

export default function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
}
