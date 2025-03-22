// React Router
import { Link } from "react-router-dom";

// Components
import Logo from "./Logo";
import SignOut from "./SignOut";

const Navbar = ({ auth, setAuth }) => {
    return (
        <nav className="bg-neutral-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    {auth ? (
                        <>
                            <Link to="/createevent" className="text-gray-300 hover:text-white">
                                Create a new Event
                            </Link>
                            <SignOut setAuth={setAuth} />
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className="text-gray-300 hover:text-white">
                                Sign In
                            </Link>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
