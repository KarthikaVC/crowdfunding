import React from "react";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Adding CSS
import "./App.css";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import PledgeForm from "./components/PledgeForm/PledgeForm";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import ViewUser from "./components/User/ViewUser";
import Register from "./components/User/Register";
import DeleteProject from "./components/ProjectForm/DeleteProject";
import EditProject from "./components/ProjectForm/EditProject";


const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer/>
    </>
  );
}

const router = createBrowserRouter(
  [
    {element:<Layout/>,
    children:[
      {path:"/",element:<HomePage/>,},
      {path:"/about",element:<About/>,},
      {path:"/contactUs",element:<ContactPage/>,},
      {path:"/project/:id",element:<ProjectPage/>,},
      {path:"/projects",element:<ProjectForm/>,},
      {path:"/login",element:<LoginPage/>,},
      {path:"/pledges",element:<PledgeForm/>},
      {path:"/projects/deleteProject/:id",element:<DeleteProject/>,},
      {path:"/projects/editProject/:id",element:<EditProject/>,},
      {path:"/viewAccount/:id",element:<ViewUser/>},
      {path:"/register",element:<Register/>},
],
}]  
);

function App(){
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}
export default App;