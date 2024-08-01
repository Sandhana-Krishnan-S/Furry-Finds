import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import signUpCover from '../../assets/images/Signup-Cover.png'
import { useAuth } from '../../contexts/AuthContext'
import { RegisterController } from './axios/RegisterController'

export default function Register() {
  const Navigate = useNavigate()
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [flag, setFlag] = useState(false)
  const [err , setErr] = useState('')

  const {login} = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await RegisterController(Username , Email , Password);
      if (response.status) {
        login()
        Navigate('/')
      }
      else {
        setErr(response.message)
      }
    } catch (error) {
      setErr('An unexpected error occurred. Please try again.')
    }
  }
  const checkboxHandler = () => {
    setFlag(!flag);
  };
  return (
    <div>
      <div className="formStyle">
        <div className="form">
          <h2>Welcome!</h2>
          <h2>Furry Finds, Care of Pets!</h2>
          <p id="heading">Indulge in delightful, create an account for Furry Finds!</p>
          <p style={{color : '#FF6961'}}>{err}</p>
          <form onSubmit={handleSubmit} >
            <label>Username : </label>
            <input type="text" value={Username} required onChange={(event) => setUsername(event.target.value)} placeholder="Enter your Username" className="inputbox" />
            <label>Email : </label>
            <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" className="inputbox" />
            <label>Password : </label>
            <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your Password" className="inputbox" />
            <div className="checkbox-btn">
              <input type="checkbox" onClick={checkboxHandler} />
              <p className="terms">By signing up you are agree to our Term of Use and Privacy Policy.</p>
            </div>
            <input type="submit" disabled={!flag} className="submit-btn" value='Signup'/>
          </form>
          <button id="buttonOnLogin">
            <NavLink to='/login'>
              Don’t have an account? <span id="colorchange">Signup Here</span>
            </NavLink >

          </button>
        </div>
        <div className="imgContainer">
          <img src={signUpCover} alt="no img" className="cover-img" />
        </div>
      </div>
    </div>
  )
}
