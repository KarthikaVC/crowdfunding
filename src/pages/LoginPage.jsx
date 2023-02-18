import React from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";


function LoginPage(){
// State
const [login,setLogin] =useState();

useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URL}users/`)
    .then((results) =>{
        return results.json();
    })
    .then((data)=>{
        setLogin(data);
    });
}, []);


return (
<div>
    <h2>This is Login Page</h2>
</div>);
}
export default LoginPage