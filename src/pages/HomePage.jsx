import React from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { useState , useEffect } from "react";

export function HomePage(){
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
    <div>
    <h1>Grad ED</h1>
    <p>To raise funds for students who are little low on funds and need financial support in doing their University Education.</p>
    <p></p>
    <div id="project-list">
    {projectList.map((project,key)=>{
        return <ProjectCard key={key} projectData={project} />;
    }
    )}
    </div>
    </div>
    );
}