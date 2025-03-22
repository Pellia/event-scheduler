// React Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setAuth }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("token");
        setAuth(null);
        navigate("../");
    };

    return (
        <Link to="/" onClick={handleClick} className="border-2 border-gray-200 py-2 px-4 rounded-lg font-bold text-md text-center hover:border-red-200 hover:text-red-200">
            Sign Out :(
        </Link>
    );
};

export default SignOut;
