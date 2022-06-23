import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Routes, Route, Link } from "react-router-dom";
import Search from "./pages/search";
import Main from "./pages/home";
import Favorites from "./pages/favorites";
import AppBar from "./components/appBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Vacancy from "./pages/card";
import About from "./pages/about";

function App() {
  return (
    <>
      <div className="grad">
        <AppBar></AppBar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
