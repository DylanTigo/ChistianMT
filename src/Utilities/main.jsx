import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import DetailProject from "../Pages/DetailProject.jsx";
import Home from "../Pages/Home.jsx";
import Projects from "../Pages/Projects.jsx";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects/:id" element={<DetailProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
