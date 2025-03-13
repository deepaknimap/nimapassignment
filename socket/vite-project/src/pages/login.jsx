import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useSelector, useDispatch } from "react-redux";
import { logUser } from "../store/userSlice";
const loginUrl = "http://localhost:8000/api/users/login";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response  = await axios.post(loginUrl , formData , {withCredentials : true});
       dispatch(logUser(response.data.result));
      alert(response.data.msg);
      navigate('/message');
    } catch (error) {
        console.log(error.message); 
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
