import Navbar from "./Navbar";
import Footer from "./Footer";
import Alerts from "../ui/Alerts";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";

export default function Layout() {
    const displayAlert = useAppSelector((state) => state.alerts.value);
    return (
        <div
            className={`h-screen ${
                displayAlert == true
                    ? "grid-rows-[auto_auto_1fr_auto]"
                    : "grid-rows-[auto_1fr_auto]"
            } grid`}
        >
            {displayAlert && <Alerts />}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
