import { Link } from "react-router-dom";

const Navbar = ({ auth }) => {
    // if (auth) {
    //     console.log("yea");
    // } else {
    //     console.log("nope");
    // }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    Event Scheduler
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    {/* {(auth && (
                        <>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Create a new Event
                            </Link>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Sign Out
                            </Link>
                        </>
                    )) || (
                        <>
                            <Link to="/signin" className="text-gray-300 hover:text-white">
                                Sign In
                            </Link>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Sign Up
                            </Link>
                        </>
                    )} */}
                    {auth ? (
                        <>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Create a new Event
                            </Link>
                            <Link to="/signup" className="text-gray-300 hover:text-white">
                                Sign Out
                            </Link>
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
