import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import SignIn from "./views/SignIn";
import MainLayout from "./views/MainLayout";
import EventDetails from "./components/EventDetails";

const App = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem("token")));
    }, []);
    // console.log(auth);
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout auth={auth} setAuth={setAuth} />}>
                    <Route index element={<Home />} />
                    <Route path="events/:id" element={<EventDetails />} />
                    <Route path="signin" element={<SignIn setAuth={setAuth} />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
