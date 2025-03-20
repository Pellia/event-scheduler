const SignIn = () => {
    const handleChange = (e) => {
        setCreateValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(inputValue);
    };

    const handleSubmit = (e) => {
        console.log(e);
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
