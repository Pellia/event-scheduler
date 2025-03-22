// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Map from "../components/Map";

const CreateEvent = ({ auth }) => {
    const [createValue, setCreateValue] = useState(null || { title: "", description: "", date: "", location: "", latitude: 53.55, longitude: 9.99 });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCreateValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(createValue);
    };

    // useEffect(() => {
    //     if (!auth) {
    //         navigate("../");
    //     }
    // }, []);

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
                location: createValue["location"],
                latitude: createValue["latitude"],
                longitude: createValue["longitude"],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data["id"]);
                navigate(`../events/${data["id"]}`);
            });
    };
    return (
        <div className="p-4">
            <div className="container mx-auto bg-white p-8 flex gap-2 flex-col mt-10 border border-neutral-200 rounded-lg">
                <h1 className="text-neutral-800 font-bold text-2xl text-center">Create a new Event</h1>
                <form onSubmit={handleCreateEvent} className=" flex flex-col mx-12 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="title">
                            Title
                        </label>
                        <input onChange={handleChange} className="border border-neutral-400 rounded-xl h-10 text-lg px-2" type="text" name="title" id="title" placeholder="Enter a title..." required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            onChange={handleChange}
                            className="border border-neutral-400 rounded-xl h-30 text-lg px-2"
                            name="description"
                            id="description"
                            placeholder="Enter a description..."
                            required
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="location">
                            Location
                        </label>
                        <input
                            onChange={handleChange}
                            className="border border-neutral-400 rounded-xl h-10 text-lg px-2"
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Enter a location..."
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="date">
                            Date
                        </label>
                        <input onChange={handleChange} className="border border-neutral-400 rounded-xl h-10 text-lg px-2" type="datetime-local" name="date" id="date" required />
                    </div>
                    <div className="border-2 border-pink-200">
                        <Map setCreateValue={setCreateValue} />
                    </div>
                    <button className="bg-pink-200 p-2 rounded-md mt-4 hover:bg-pink-300 text-neutral-800 font-bold text-lg cursor-pointer">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
