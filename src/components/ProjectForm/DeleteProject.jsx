import React from "react";
import { useState , useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";

function DeleteProject(props){
    const [projectList,setProjectList] =useState([]);

    const {id} =useParams();
    const navigate = useNavigate();
    // const authToken = window.localStorage.getItem("token");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
        .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
    }, []);

    const handleYes=(event)=>{
            // projectList.splice(id-1,1);
            // // console.log(projectList);
            // setProjectList([...projectList])
            // console.log(projectList);
            // navigate("/");

            setProjectList((prevProjectList) => {
                const projects = [...prevProjectList]
                projects.splice(id-1,1)
                console.log(projects);
                navigate("/");
                return projects
            });
            
        };
    const handleNo=(id)=>{
            navigate("/");
        }

    return (
        <div>
        <h1>Delete Project Page</h1>
        <div>Are you sure you want to delete Project {id}? </div>
            <button className="btn-account-class" onClick={()=>handleYes(id)}>yes</button>
            <button className="btn-account-class" onClick={()=>handleNo(id)}>No</button>
        </div>
    );

}
export default DeleteProject;