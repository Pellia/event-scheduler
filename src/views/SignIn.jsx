import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setAuth }) => {
    const [inputValue, setInputValue] = useState(null || { email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(inputValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({
                email: inputValue["email"],
                password: inputValue["password"],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.token);
                localStorage.setItem("entries", JSON.stringify(data.token));
                setAuth(data.token);
            });

        navigate("../");
    };
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} className="border" type="email" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} className="border" type="password" name="password" id="password" required />
                <button className="bg-blue-200 p-2">Login</button>
            </form>
        </div>
    );
};

export default SignIn;
