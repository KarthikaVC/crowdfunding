import React from "react";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewUser(){
    const [user,setUser] =useState({});
    const {id} =useParams();
    console.log(id);
    // Adding for User View page 
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
}, []);

    return (
        <div className="container">
            <h1>Profile page</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
        </div>

    );

}
export default ViewUser;