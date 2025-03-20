import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SingUp from "./views/SingUp";

const App = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/events")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-500">App</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SingUp />} />
                {/* Show the list of the events */}
                {/* Show detail of each event => use Dynamic routs (route/:id => useParams) */}
            </Routes>
        </>
    );
};

export default App;
