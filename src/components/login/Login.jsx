import React, { useState } from 'react';
import cover from '../../assets/images/Login-Cover.png';
import '../../styles/Login/style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginController } from './axios/LoginAxios';

export default function Login() {
  const Navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [flag, setFlag] = useState(false)
  const [err , setErr] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log({email , password})
      const response = await loginController(email, password);
      if (response.status) {
        login()
        Navigate('/')
      }
      else {
        setErr(response.message)
      }
    } catch (error) {
      console.log(error)
      setErr('An unexpected error occurred. Please try again.')
    }
  }

   const checkboxHandler = () => {
    setFlag(!flag);
  }

  return (
    <div className="unscrollable-container">
      <div className="formStyle">
        <div className="form">
          <h2>Hey, </h2>
          <h2>Welcome Back To Furry Finds</h2>
          <p id="heading">We are very happy to see you back!</p>
          <p style={{color : '#FF6961'}}>{err}</p>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              required
              placeholder="Enter your Email"
              className="inputbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              required
              placeholder="Enter your Password"
              className="inputbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkbox-btn">
              <input type="checkbox" className="check" onClick = {checkboxHandler} />
              <p className="terms">By signing up you agree to our Terms of Use and Privacy Policy.</p>
            </div>
            <input type="submit" className="submit-btn" value="Login" disabled={!flag} />
          </form>
          <button id="buttonOnLogin">
            <NavLink to='/signup'>
              <span className="color">Don’t have an account? <span>Signup Here</span></span>
            </NavLink>
          </button>
        </div>
        <div className="imgContainer">
          <img src={cover} alt="Cover" className="cover-img" />
        </div>
      </div>
    </div>
  );
}
