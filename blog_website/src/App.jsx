import React from "react";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/home/Home";
import Createpost from "./pages/createpost/Createpost";
import { Route, Routes } from "react-router-dom";
import Showpost from "./pages/showpost/Showpost";
import Editpost from "./pages/edit/Editpost";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createpost />} />
        <Route path="/post/:id" element={<Showpost />} />
        <Route path="/edit/:id" element={<Editpost />} />
      </Routes>
    </div>
  );
};

export default App;
