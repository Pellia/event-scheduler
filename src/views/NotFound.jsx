import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold mt-2">404 - Not Found :(</h1>
            <Link to="/">
                Go back <span className="underline font-bold">Home</span>
            </Link>
        </div>
    );
};

export default NotFound;
