import React from "react";
import { useState } from "react";

function CreateUserForm(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the Username change
    const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    };

    // Handling the First Name change
    const handleFirstName = (e) => {
    setFirst_name(e.target.value);
    setSubmitted(false);
    };

    // Handling the Last Name change
    const handleLastName = (e) => {
        setLast_name(e.target.value);
        setSubmitted(false);
        };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '' || 
        first_name === '' || last_name=== '') 
        {
        setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            const postProject = await postData();
            navigate("/");
        }
    };
    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}projects/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(projects),
            }
        );
        return response.json();
    };

    // Showing success message
    const successMessage = () => {
    return (
        <div
        className="success"
        style={{
            display: submitted ? '' : 'none',
        }}>
        <h1>User {username} successfully registered!!</h1>
        </div>
    );
    };

    // Showing error message if error is true
    const errorMessage = () => {
    return (
        <div
        className="error"
        style={{
            display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
        </div>
    );
    };

    return (
        <div>
            <div>
                <h1>User Registration</h1>
            </div>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={handleUsername}
            />
            </div>
            <div>
            <label htmlFor="first_name">First name:</label>
            <input
                type="text"
                id="first_name"
                placeholder="First name"
                onChange={handleFirstName}
            />
            </div>
            <div>
            <label htmlFor="last_name">Last name:</label>
            <input 
                type="text"
                id="last_name"
                placeholder="Last name"
                onChange={handleLastName} 
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Email address"
                onChange={handleEmail}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={handlePassword}
            />
            </div>
            <button type="submit">SignUp</button>
        </form>
        </div>
    );

}
export default CreateUserForm;