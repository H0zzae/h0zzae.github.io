import React from 'react';
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import './App.css';
import {About, Project} from "./pages";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/project" element={<Project/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
