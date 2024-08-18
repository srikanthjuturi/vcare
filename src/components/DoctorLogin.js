import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import doctor from '../images/doctor.png'
import './Doctor.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import '../components/DoctorHome.css'

export default function DoctorLogin() {
  const navigate = useNavigate()
  const [logindata, setlogindata] = useState({
    username: '',
    passwords: ''
  })
  const [error, seterror] = useState({
    username: '',
    passwords: ''
  })

  const [loginerror, setloginerror] = useState('')
  const [show, setshow] = useState(false)



  const handledata = (e) => {
    const { name, value } = e.target;
    setlogindata((predata) => ({ ...predata, [name]: value }))
  }

  const submitdata = async () => {

    let isvalid = true;

    if (logindata.username.trim() === '') {
      seterror((error) => ({ ...error, username: 'Please Enter Your Phone Number' }))
      isvalid = false
    }
    else if (!(logindata.username.trim().length === 10)) {
      seterror((error) => ({ ...error, username: 'Please Enter vaild Phone Number' }))
      isvalid = false
    }
    else {
      seterror((error) => ({ ...error, username: '' }))
    }
    // ______________

    if (logindata.passwords.trim() === '') {
      seterror((error) => ({ ...error, passwords: 'Please Enter Password' }))
      isvalid = false
    } else if (logindata.passwords.trim().length < 5) {
      seterror((error) => ({ ...error, passwords: 'Please Enter Minimum 5' }))
      isvalid = false
    }
    else if (logindata.passwords.trim().length > 10) {
      seterror((error) => ({ ...error, passwords: 'Please Enter Maxmimum 10' }))
      isvalid = false
    }
    else {
      seterror((error) => ({ ...error, passwords: '' }))
    }

    if (isvalid) {

      try {
        setshow(true)
        const response = await axios.post('http://localhost:5000/doctor/login', { logindata: logindata }, { headers: { 'Content-Type': 'application/json' } })
        if (response.status === 200) {
          localStorage.setItem("doctordata", JSON.stringify(response.data[0]))
          navigate('/doctorhome');
        }
      } catch (e) {
        setloginerror(e.response.data)
        setshow(false)
        setTimeout(() => {
          setloginerror('')
        }, 2000)
        console.log(e)
      }

    }

  }


  return (
    <>
      <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div onClick={()=>{navigate('/')}}>
          <img src={img} alt="" id='general-logo' style={{ cursor: 'pointer' }} />
        </div>
        <div className='ms-auto'>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse content" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mt-4">
           
              <li className="nav-item d-flex align-items-center">
                <p className="text-light"><img src={call} alt="" className='general-icons' /></p>
                <p className="text-light">Call us: +91-6301815418</p>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      <div className='doctor-login-parent'>

        <div className='doctor-login-inner'>
          <h5 className='text-center'><span><img src={doctor} alt="" className='doctor-img-in-register' /></span> Life Doctor Profile</h5>
          <div>
            {/* <label htmlFor="id">username Id</label> */}
            {loginerror && <p className='text-danger'>{loginerror}</p>}
            <input type="text" placeholder='Enter Your Phone Number' name='username' value={logindata.username} onChange={handledata} id='id' />
            {error.username && <p className='text-danger'>{error.username}</p>}
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" placeholder='Enter Your Password' value={logindata.passwords} name='passwords' onChange={handledata} id='password' />
            {error.passwords && <p className='text-danger'>{error.passwords}</p>}
          </div>
          <div className='d-flex justify-content-center'>
            {show && <span className="loader"></span>}
          </div>
          <div>
            <Button variant='contained' className='mt-3' onClick={submitdata} fullWidth>Login</Button>
          </div>
        </div>

      </div>
      <div className="home-footer bg-dark mt-5 p-2">
        <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
      </div>

    </>
  )
}
