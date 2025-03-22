// React Router
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="text-white text-lg font-bold">
            <h1 class="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-2xl">Event Scheduler</h1>
        </Link>
    );
};

export default Logo;
