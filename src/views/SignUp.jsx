// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
    const [createValue, setCreateValue] = useState(null || { email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCreateValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({
                email: createValue["email"],
                password: createValue["password"],
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        navigate("../signin");
    };

    return (
        <div className="p-4">
            <div className="container mx-auto bg-white p-8 flex gap-2 flex-col mt-10 border border-neutral-200 rounded-lg">
                <h2 className="text-neutral-800 font-bold text-2xl text-center">Register for free</h2>
                <form onSubmit={handleCreateUser} className=" flex flex-col mx-12 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            className="border border-neutral-400 rounded-xl h-10 text-lg px-2"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email..."
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-lg" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            className="border border-neutral-400 rounded-xl h-10 text-lg px-2"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password..."
                            required
                        />
                    </div>
                    <button className="bg-pink-200 p-2 rounded-md mt-4 hover:bg-pink-300 text-neutral-800 font-bold text-lg cursor-pointer">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SingUp;
