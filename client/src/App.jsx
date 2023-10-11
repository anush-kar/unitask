import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Tasks from "./Pages/Tasks";
import PostTask from "./Pages/PostTask";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css"

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home />, },
    { path: "/About", element: <About />, },
    { path: "/Tasks", element: <Tasks />, },
    { path: "/PostTask", element: <PostTask />, },
  ]);

  return(
    <div className="App">
      <Navbar />
      <div className="Page">
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App