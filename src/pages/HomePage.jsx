import React from "react";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

import { useState , useEffect } from "react";

function HomePage(){
    // State
    const [projectList,setProjectList] =useState([]);

    // Effects - useEffect is getting rendered after the UI is rendered for first time
    // if we have value in useState an value in array then it renders one another time.
    useEffect(() => {
        //const baseURL = import.meta.env.VITE_API_URL;
        fetch(`${import.meta.env.VITE_API_URL}projects`)
        .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
    }, []);
    
    return (
    <div className="container">
        <h1>Projects</h1>
        <div id="project-list">
            {projectList.map((project,key)=>{
            return <ProjectCard key={key} projectData={project} />;
        }
    )}
    </div>
    <br/><br/>
    <div>
        <Link to="/login" className="btn-account-class">Start a Fundraiser</Link>
    </div>
    </div>
    );
}
export default HomePage;