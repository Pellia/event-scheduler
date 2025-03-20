import { useState, useEffect } from "react";

const Events = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/events")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setEvents(data.results);
            });
    }, []);
    return (
        <div>
            {events &&
                events.map((item, index) => {
                    return (
                        <div className="border" key={index}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Events;
