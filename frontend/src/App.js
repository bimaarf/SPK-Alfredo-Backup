import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Dashboard } from "./Pages/DecisionMaker/Dashboard";
import { Mahasiswa } from "./Pages/DecisionMaker/Mahasiswa";
import { Home } from "./Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/decision-maker/dashboard" element={<Dashboard />} />
          <Route path="/decision-maker/mahasiswa" element={<Mahasiswa />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
