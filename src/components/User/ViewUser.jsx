import React from "react";
import { useState , useEffect } from "react";
import { useParams ,Link } from "react-router-dom";

function ViewUser(){
    const [user,setUser] =useState({});
    const {id} =useParams();
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
            <h2 className="project-page-title">Profile Page</h2> 
            <h4>Username : {user.username}</h4>
            <h4>Email : {user.email}</h4>
            <h4>First Name : {user.first_name}</h4>
            <h4>Last Name : {user.last_name}</h4>
        <br/><br/>
        <div>
        <Link to={`/users/update_profile/${id}`} className="btn-account-class">Edit</Link>
        <Link to= {`/users/delete_user/${id}`} className="btn-account-class">Delete</Link>
        <Link to= {`/users/change_pwd/${id}`} className="btn-account-class">Change Password</Link>
        </div>  
    </div>
        

    );

}
export default ViewUser;