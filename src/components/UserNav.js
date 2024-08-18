import React from 'react'
import './Book.css'
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import logout from '../images/logout.png'
import profile from '../images/profile.png'
import doctor from '../images/doctor.png'
import list from '../images/list.png'
import './DoctorHome.css'
import './UserHome.css'
import { useNavigate } from 'react-router-dom'

export default function UserNav() {
  const navigate = useNavigate()
  const logouthandle = () => {
    localStorage.removeItem('userdata')
    navigate('/')
  }
  return (
    <>
      <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div>
          <img src={img} alt="" id='general-logo' onClick={() => { navigate('/userhome') }} style={{ cursor: 'pointer' }} />
        </div>
        <div className='ms-auto'>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse content" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mt-4">
              <li className="nav-item d-flex  align-items-center" onClick={() => { navigate('/userhome') }}>
                <p className="text-light"><img src={doctor} alt="" className='general-icons' /></p>
                <p className="text-light">Show Doctors</p>
              </li>
              <li className="nav-item d-flex  align-items-center" onClick={() => { navigate('profile') }}>
                <p className="text-light"><img src={profile} alt="" className='general-icons' /></p>
                <p className="text-light">My Profile</p>
              </li>
              <li className="nav-item d-flex  align-items-center" onClick={() => { navigate('myappointments') }}>
                <p className="text-light"><img src={list} alt="" className='general-icons' /></p>
                <p className="text-light">My Appointemts</p>
              </li>
              <li className="nav-item d-flex align-items-center">
                <p className="text-light"><img src={call} alt="" className='general-icons' /></p>
                <p className="text-light">Call us: +91-6301815418</p>
              </li>
              <li className="nav-item d-flex align-items-center" onClick={logouthandle}>
                <p className="text-light"><img src={logout} alt="" className='general-icons' /></p>
                <p className="text-light">Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
