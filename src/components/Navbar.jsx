// React Router
import { Link } from "react-router-dom";

// Components
import Logo from "./Logo";
import SignOut from "./SignOut";

const Navbar = ({ auth, setAuth }) => {
    return (
        <nav className="bg-neutral-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <div className="flex space-x-4 items-center">
                    <Link to="/" className="font-bold text-md hover:text-pink-200">
                        Home
                    </Link>
                    {auth ? (
                        <>
                            <Link
                                to="/createevent"
                                className="bg-gradient-to-r from-yellow-200 via-pink-200 to-violet-200 text-neutral-800 py-2 px-4 rounded-lg font-bold text-md text-center hover:bg-gradient-to-r hover:from-yellow-300 hover:via-pink-300 hover:to-violet-300"
                            >
                                Create a new Event
                            </Link>
                            <SignOut setAuth={setAuth} />
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className="border-2 border-gray-200 py-2 px-4 rounded-lg font-bold text-md text-center hover:border-yellow-100 hover:text-yellow-100">
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-gradient-to-r from-pink-200 to-violet-200 text-neutral-800 py-2 px-4 rounded-lg font-bold text-md text-center hover:bg-gradient-to-r hover:from-pink-300 hover:to-violet-300"
                            >
                                Register for free
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
