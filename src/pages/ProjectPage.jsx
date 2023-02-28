import React from "react";
// import { oneProject } from "../data";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import { Link } from "react-router-dom";

function ProjectPage(){
    // State
    const [project,setProject] =useState({pledges: []});
    // Hooks

    const {id} =useParams();

    // Effects
    // fetch is a asynchronous function - means you wait with the response
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) =>{
            return results.json();
        })
        .then((data)=>{
            setProject(data);
        });
    }, []);

    return (
<div className="container">
    <div className="row">
        <div className="contact-left">
            <h2 className="project-page-title">{project.title}</h2> 
            <p><img src={project.image}/></p>
            <h4>{project.description}</h4>
            <h4>Created at: {project.date_created}</h4>
            <h4>{`Status : ${project.is_open}`}</h4>
            
                <h4>Pledges:</h4>
            <ul>
                {project.pledges.map((pledgeData,key)=>{
                    return (
                        <li key={key}>
                            {pledgeData.amount} from Supporter {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
        <div className="contact-right">
            <h2 className="project-page-title">Make Donations</h2>
                <PledgeForm/>
            </div>
        </div>  
        <br/> <br/> 
    <div>
    <Link to={`/projects/editProject/${id}`} className="btn-account-class">Edit</Link>
    <Link to= {`/projects/deleteProject/${id}`} className="btn-account-class">Delete</Link>
    </div>     
</div>

);
}

export default ProjectPage;