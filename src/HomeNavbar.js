import React from 'react'
import './components/Book.css'
import img from './images/v-care-logo.png'
import call from './images/call.png'
import './components/DoctorHome.css'
import { useNavigate } from 'react-router-dom'
 


export default function HomeNavbar() {
  const navigate = useNavigate()
  return (
    <>
       <nav className="home-navbar navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div onClick={()=>{navigate('/')}}>
          <img src={img} alt="" id='general-logo' style={{ cursor: 'pointer' }} />
        </div>
        <div className='ms-auto'>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse content" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mt-4">
            <li className="nav-item d-flex  align-items-center" onClick={()=>{navigate('/doctordashboard')}} >
                {/* <p className="text-light"><img src={list1} alt="" className='general-icons' /></p> */}
                <p className="text-light">Doctor</p>
              </li>
              <li className="nav-item d-flex  align-items-center" onClick={()=>{navigate('/userdashboard')}} >
                {/* <p className="text-light"><img src={list1} alt="" className='general-icons' /></p> */}
                <p className="text-light">User</p>
              </li>
              <li className="nav-item d-flex  align-items-center" >
                {/* <p className="text-light"><img src={list1} alt="" className='general-icons' /></p> */}
                <p   className="text-light"><a className='links-in-home'  href="#about">About Us</a></p>
              </li>
              <li className="nav-item d-flex  align-items-center" >
                {/* <p className="text-light"><img src={profile} alt="" className='general-icons' /></p> */}
                <p   className="text-light"><a className='links-in-home'  href="#treatment">Treament</a></p>
              </li>
              <li className="nav-item d-flex  align-items-center" >
                {/* <p className="text-light"><img src={list} alt="" className='general-icons' /></p> */}
                <p   className="text-light"><a className='links-in-home'  href="#faq">FAQ</a></p>
              </li>
              <li className="nav-item d-flex align-items-center">
                <p className="text-light"><img src={call} alt="" className='general-icons' /></p>
                <p className="text-light">Call us: +91-6301815418</p>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
