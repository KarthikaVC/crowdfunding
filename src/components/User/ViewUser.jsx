import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ViewUser(){
    const [userList,setUserList] =useState();

    console.log(userList);

    // Adding for User View page 
    useEffect(() => {
        //const baseURL = import.meta.env.VITE_API_URL;
        fetch(`${import.meta.env.VITE_API_URL}users`)
        .then((results) => {
        return results.json();
    })
    .then((data) => {
        setUserList(data);
    });
    }, []);

    return (
        <div className="container">
            <h1>Profile page</h1>
            {/* Added by me for user List printing
        <div>
        {userList.map((user,key)=>{
            return <ViewUser key={key} projectData={user} />;
        }
        )} 
        </div> */}
        </div>

    );

}
export default ViewUser;