import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="grid grid-cols-5 h-screen">
          <Sidebar />
          <div className="col-span-4 m-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
