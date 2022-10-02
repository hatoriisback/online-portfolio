import React from "react";

// Routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Interest from "../Pages/Interest";
import Awards from "../Pages/Awards";
import Education from "../Pages/Education";

// Login Page
import Login from "../Pages/Login";

export default function NavRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="experience"
        element={
          <ProtectedRoute>
            <Experience />
          </ProtectedRoute>
        }
      />
      <Route
        path="education"
        element={
          <ProtectedRoute>
            <Education />
          </ProtectedRoute>
        }
      />
      <Route
        path="skills"
        element={
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        }
      />
      <Route
        path="interests"
        element={
          <ProtectedRoute>
            <Interest />
          </ProtectedRoute>
        }
      />
      <Route
        path="awards"
        element={
          <ProtectedRoute>
            <Awards />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
