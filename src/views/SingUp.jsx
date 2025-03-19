const SingUp = () => {
    // Send a post request with a header and a body
    const handleCreateUser = () => {
        // post request goes here
        fetch("http://localhost:3001//api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({
                email: "user2@example.com",
                password: "password123",
            }),
        });
    };

    return (
        <div>
            SingUp
            <button onClick={handleCreateUser}>Submit Create User</button>
        </div>
    );
};

export default SingUp;
