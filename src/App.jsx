// Hooks
import React, { useEffect, useState } from "react";

// React Router
import { Route, Routes } from "react-router-dom";

// Components
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import MainLayout from "./views/MainLayout";
import EventDetails from "./components/EventDetails";
import CreateEvent from "./views/CreateEvent";
import NotFound from "./views/NotFound";

const App = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem("token")));
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout auth={auth} setAuth={setAuth} />}>
                    <Route index element={<Home />} />
                    <Route path="events/:id" element={<EventDetails />} />
                    <Route path="createevent" element={<CreateEvent auth={auth} />} />
                    <Route path="signin" element={<SignIn setAuth={setAuth} />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
