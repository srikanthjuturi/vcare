
import React, { useEffect, useState } from 'react'
import './Book.css'
import './DoctorHome.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './UserHome.css'
import UserNav from './UserNav'
import { Outlet } from 'react-router-dom'


export default function UserHome() {
  const [data, setdata] = useState({})



  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('userdata'))
    setdata(details)
  }, [])

  return (
    <>
      <UserNav />
      <h1 className='text-center text-primary mt-3'>WelCome <span className='text-success'>{data.username}</span>  </h1>

      <div className="doctor-home-content">
        <div className="doctor-home-inner border border-light border-2 rounded-3">
          <Outlet />
        </div>
      </div>
      <div className="home-footer bg-dark mt-5 p-2">
        <p className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</p>
      </div>
    </>

  )
}
