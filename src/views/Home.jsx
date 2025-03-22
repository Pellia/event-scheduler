// Components
import Events from "../components/Events";

const Home = () => {
    return (
        <div className="p-4">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <h1 className="text-neutral-800 font-bold text-2xl text-center">Event Overview</h1>
                <Events />
            </div>
        </div>
    );
};

export default Home;
