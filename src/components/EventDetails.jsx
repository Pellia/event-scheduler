import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    const [eventDetail, setEventDetail] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.title);
                setEventDetail(data);
            });
    }, []);

    return (
        <div>
            {eventDetail && (
                <div>
                    <div>{eventDetail.title}</div>
                    <div>{eventDetail.description}</div>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
