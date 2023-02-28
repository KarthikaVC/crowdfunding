import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditProject(){
    const [projects, setProjects] = useState([]);

    const { id } = useParams();
    console.log(id);

    // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjects((prevProjects) => ({
        ...prevProjects,
        [id]: value,
        }));
    };

    const navigate = useNavigate();
    const authToken = window.localStorage.getItem("token");

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

// if authtoken exists, post the data on submit, wait for the response and nav back to home page
    const handleSubmit = async(event) => {
    event.preventDefault();
    if (authToken) {
        setProjects()
        const postProject = await postData();
        navigate("/");
    }
};
    return(
        <div className="container">
        <div>Edit Projects Page</div>
        <form onSubmit={()=>handleSubmit(id)}>
            <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                placeholder="Enter title"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                placeholder="Enter description"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="goal">Goal:</label>
            <input 
                type="number"
                id="goal" 
                onChange={handleChange} 
            />
            </div>
            <div>
            <label htmlFor="image">Image:</label>
            <input
                type="text"
                id="image"
                placeholder="Enter Image address"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="is_open">is open:</label>
            <input
                type="checkbox"
                id="is_open"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="date_created">Date Created:</label>
            <input
                type="date"
                id="date_created"
                onChange={handleChange}
            />
            </div>
            <button type="submit">Update Project</button>
        </form>
        </div>
    );

}
export default EditProject;