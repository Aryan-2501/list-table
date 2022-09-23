import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import EditData from "../Pages/EditData/EditData";
import NewData from "../Pages/NewData/NewData";

function Routelist() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newdata" element={<NewData />} />
      <Route path="/editdata" element={<EditData />} />
    </Routes>
  );
}

export default Routelist;
