// Hooks
import { useState, useEffect } from "react";

// React Router
import { Link } from "react-router-dom";

const Events = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.results);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-2 ">
            {events &&
                events.map((item, index) => {
                    return (
                        <div className="border border-neutral-200 bg-white p-4 rounded-lg flex flex-col gap-4" key={index}>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p>{item.date.slice(0, 10)}</p>
                            </div>
                            <hr className="border-neutral-400 border-dashed" />
                            <p>{item.description}</p>
                            <hr className="border-neutral-400 border-dashed" />
                            <div className="flex justify-between items-center">
                                <p>{item.location}</p>
                                <Link className=" bg-pink-200 p-2 rounded-md text-sm hover:bg-violet-200" to={`events/${item.id}`}>
                                    More Details
                                </Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Events;
