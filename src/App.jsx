import React from "react";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
// Adding CSS
import "./App.css";
// Components
import { Nav } from "./components/Nav/Nav";
//Pages
import { HomePage } from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

const HeaderLayout =()=>(
<div>
  <Nav></Nav>
  <Outlet></Outlet>
</div>
);
const router = createBrowserRouter(
  [
    {element:<HeaderLayout/>,
    children:[
      {path:"/",element:<HomePage/>,},
      {path:"/project/:id",element:<ProjectPage/>,},
      {path:"/login",element:<LoginPage/>,},
],
}]  
);

function App(){
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}
export default App;