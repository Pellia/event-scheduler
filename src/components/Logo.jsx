// React Router
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="text-white text-lg font-bold">
            <h1 class="bg-gradient-to-r from-yellow-200 via-pink-200 to-violet-200 inline-block text-transparent bg-clip-text font-bold text-2xl">Event Scheduler</h1>
        </Link>
    );
};

export default Logo;
