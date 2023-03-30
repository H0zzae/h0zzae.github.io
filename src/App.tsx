import React from 'react';
import logo from './logo.svg';
import './App.css';
import {About, Project} from "./pages";
import {BrowserRouter,Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/*<Header />*/}
          <Routes>
              <Route path={"/"} element={<About title={"hh0zzzae"} />} />
              <Route path={"/project"} element={<Project />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
