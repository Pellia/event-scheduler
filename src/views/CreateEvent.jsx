import { useState } from "react";
import Map from "../components/Map";

const CreateEvent = ({ auth }) => {
    const [createValue, setCreateValue] = useState(null || { title: "", description: "", date: "", location: "", latitude: 0, longitude: 0 });

    const handleChange = (e) => {
        setCreateValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(createValue);
    };

    const handleCreateEvent = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer ${auth}`,
            },
            body: JSON.stringify({
                title: createValue["title"],
                description: createValue["description"],
                date: createValue["date"],
                // location: createValue["location"],
                location: "Hamburg",
                latitude: createValue["latitude"],
                longitude: createValue["longitude"],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // localStorage.setItem("token", JSON.stringify(data.token));
                // setAuth(data.token);
            });
    };
    return (
        <div>
            <h1>Create a new Event</h1>
            <form onSubmit={handleCreateEvent}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} className="border" type="text" name="title" id="title" required />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} className="border" type="text" name="description" id="description" required />
                <label htmlFor="date">Date</label>
                <input onChange={handleChange} className="border" type="datetime-local" name="date" id="date" required />
                <button className="bg-blue-200 p-2">Create new Event</button>
            </form>
            <Map setCreateValue={setCreateValue} />
        </div>
    );
};

export default CreateEvent;
