import { useEffect, useRef, useState } from "react";
import Message from "./component/message/Message";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/singup";
import './App.css';
import Navbar from "./component/message/Navbar";

const socketUrl = "ws://localhost:8000";

function App() {
  const [name, setName] = useState("");
 


  return (

    <Router>
    <Navbar />
    <div className="content">
      <Routes>
      <Route path="/message" element={<Message />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/" element={<Register/>} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
