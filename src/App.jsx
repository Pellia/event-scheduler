import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import SignIn from "./views/SignIn";
import MainLayout from "./views/MainLayout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;

{
    /* Show the list of the events */
}
{
    /* Show detail of each event => use Dynamic routs (route/:id => useParams) */
}
