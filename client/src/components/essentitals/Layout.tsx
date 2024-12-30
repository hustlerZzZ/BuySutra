import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Alerts from "../ui/Alerts";
import { useAppSelector } from "../../hooks/reduxHook";

export default function Layout() {
  const displayAlert = useAppSelector((state) => state.alerts.value);
  return (
    <div className="h-screen grid-rows-[auto_auto_1fr_auto] grid">
      {displayAlert && <Alerts />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
