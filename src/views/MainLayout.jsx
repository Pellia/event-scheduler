import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ auth, setAuth }) => {
    return (
        <>
            <Navbar auth={auth} setAuth={setAuth} />
            <Outlet />
        </>
    );
};

export default MainLayout;
