import React from "react";
import "../dist/output.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
