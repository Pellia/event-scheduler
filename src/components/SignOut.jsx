import { Link } from "react-router-dom";

const SignOut = ({ setAuth }) => {
    const handleClick = () => {
        localStorage.removeItem("token");
        setAuth(null);
    };

    return (
        <Link to="/" onClick={handleClick} className="text-gray-300 hover:text-white">
            Sign Out
        </Link>
    );
};

export default SignOut;
