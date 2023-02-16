import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Forget from "./component/Forget";
import Confirmpassword from "./component/Confirmpassword";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Modal1 from "./component/Modal1";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Navbar />} />
          <Route path="/Registrationform" element={<Registration />} />
          <Route path="/forgetpassword" element={<Forget />} />
          <Route path="/Confirmpassword" element={<Confirmpassword />} />
          <Route path="/M" element={<Modal1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
