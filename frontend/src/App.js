import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Dashboard } from "./Pages/DecisionMaker/Dashboard";
import { Form } from "./Pages/DecisionMaker/Form";
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
          <Route path="/decision-maker/mahasiswa/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
