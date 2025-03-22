import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapShow from "./MapShow";

const EventDetails = () => {
    const { id } = useParams();
    const [eventDetail, setEventDetail] = useState(null);
    const [position, setPosition] = useState([53.55, 9.99]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEventDetail(data);
                setPosition([data.latitude, data.longitude]);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="container mx-auto bg-white p-8 flex gap-2 flex-col mt-10 border border-neutral-200 rounded-lg">
                {eventDetail && (
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-neutral-800 font-bold text-2xl text-center">{eventDetail.title}</h2>
                            <p>{eventDetail.date.slice(0, 10)}</p>
                        </div>
                        <hr className="border-neutral-400 border-dashed" />
                        <p>{eventDetail.description}</p>
                        <hr className="border-neutral-400 border-dashed" />
                        <div className="flex justify-between items-center">
                            <p>{eventDetail.location}</p>
                        </div>
                    </div>
                )}
                <MapShow position={position} />
            </div>
        </div>
    );
};

export default EventDetails;
