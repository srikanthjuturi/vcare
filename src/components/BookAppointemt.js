import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import './Book.css'
import doctorprofile from '../images/doctorprofile.png'
import { Button } from '@mui/material'
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import logout from '../images/logout.png'


export default function BookAppointemt() {
  const location = useLocation()
  const id = location.state.id
  const [data, setdata] = useState([])

  const navigate = useNavigate()

  const fulldetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/doctor/doctordata/${id}`)
      setdata(response.data[0])
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fulldetails()
  }, [id])


  return (
    <>
      <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div>
          <img src={img} alt="" id='general-logo' onClick={() => { navigate('/userhome/doctordetails') }} style={{ cursor: 'pointer' }} />
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
              <li className="nav-item d-flex align-items-center" onClick={() => { navigate('/') }}>
                <p className="text-light"><img src={logout} alt="" className='general-icons' /></p>
                <p className="text-light">Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='general-from'>
        <div className='general-from-inner'>
          {data.length === 0 ? <div>Loading....</div> : <div className="user-home-content mt-5">
            <div className='container '>
              <div className='border border-light border-2 rounded shadhow ' >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={doctorprofile} alt="" className='me-4 p-3 doctor-image-in-userhome' />
                </div>
                <div>
                  <table className='table table-bordered table-hover table-dark '>
                    <thead>
                      <tr>
                        <th className='bg-secondary '> Name</th>
                        <td >{data.doctorname}</td>
                      </tr>
                      <tr>
                        <th className='bg-secondary'>Doctor ID</th>
                        <td >{data.id}</td>
                      </tr>
                      <tr>
                        <th className='bg-secondary'>Phone Number</th>
                        <td >{data.phonenumber}</td>
                      </tr>
                      <tr>
                        <th className='bg-secondary'>Gender</th>
                        <td >{data.gender}</td>
                      </tr>
                      <tr>
                        <th className='bg-secondary'>Speciality</th>
                        <td >{data.speciality}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className='d-flex justify-content-center'>
                  <Button variant='contained' className='w-75 mb-2' onClick={() => { navigate('/confrimation', { state: { doctorphonenumber: data.phonenumber } }) }}>Confrim appointment</Button>
                </div>
              </div>

            </div>
          </div>
          }
        </div>
      </div>
      <div className="home-footer bg-dark mt-5 p-2">
        <p className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</p>
      </div>
    </>
  )
}
