import { useState } from "react";

const SingUp = () => {
    const [inputValue, setInputValue] = useState(null || { email: "", password: "" });

    const handleChange = (e) => {
        setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(inputValue);
    };

    const handleCreateUser = (e) => {
        e.preventDefault();
        // console.log(inputValue["email"]);
        // console.log(inputValue["password"]);
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);

        // const email = e.target[0].value;
        // const password = e.target[0].value;
        fetch("http://localhost:3001/api/users", {
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
            .then((data) => console.log(data));
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} className="border" type="email" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} className="border" type="password" name="password" id="password" required />
                <button className="bg-blue-200 p-2">Submit Create User</button>
            </form>
        </div>
    );
};

export default SingUp;
