import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

import './App.css'
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

export default function App(){

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Home />
        }
      />

      <Route 
        path="/about-me/*"
        element={
          <About />
        }
      />

      <Route 
        path="/projects/*"
        element={
          <Projects />
        }
      />

    </Routes>
  )
}