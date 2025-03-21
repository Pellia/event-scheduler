import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <Outlet />
        </>
    );
};

export default MainLayout;
