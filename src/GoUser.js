import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import user from './images/multiple-user.png'
import './Home.css'
import {Typography} from '@mui/material'
import img from './images/v-care-logo.png'
import call from './images/call.png'
import './components/DoctorHome.css'

export default function GoUser() {
    const navigate = useNavigate()
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
     <div className='go-main'> 
     <div className="home-login-form">
            <div>
              <img src={user} alt="" className='doctor' />
            </div>
            <div>
              <Button variant='contained' onClick={() => { navigate('/userlogin') }} fullWidth className='mt-3'> Login as a user</Button>
            </div>
            <div>
              <Button variant='contained' onClick={() => { navigate('/useregister') }} fullWidth className='mt-3 '>join as a user</Button>
            </div>
          </div>
          </div>

          <div className="home-footer bg-dark  p-2">
        <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
      </div>
     </>
  )
}
