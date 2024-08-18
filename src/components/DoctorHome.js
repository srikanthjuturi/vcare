
import React, { useEffect, useState } from 'react'
import './Book.css'
import { Typography } from '@mui/material'
import './DoctorHome.css'
import { json, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import DoctorNavbar from './DoctorNavbar'
import axios from 'axios'

export default function DoctorHome() {

  const details = JSON.parse(localStorage.getItem('doctordata'))
 
  return (
    <>
      <DoctorNavbar />

      <h1 className='text-danger text-center mt-3'> WelCome <span className='text-success'>{details.doctorname}</span> </h1>
    
      <div className="doctor-home-content container">
        <div className="doctor-home-inner border border-light border-2 rounded-3">
          <Outlet />
        </div>
      </div>

      <div className="home-footer bg-dark mt-5 p-2">
        <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
      </div>


    </>

  )
}
