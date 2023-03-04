import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
