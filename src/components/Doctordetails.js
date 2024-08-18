import React, { useState, useEffect } from 'react'
import './Book.css'
import doctorprofile from '../images/doctorprofile.png'
import { Button } from '@mui/material'
import './DoctorHome.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../App'
import axios from 'axios'
import './UserHome.css'
import { Outlet } from 'react-router-dom'

export default function Doctordetails() {
  const navigate = useNavigate()

  const [doctordetails, setdoctordetials] = useState([])
  const [data, setdata] = useState({})
  const details = useContext(context)

  const getname = () => {
    setdata(details)
  }

  const getdoctordata = async () => {
    const response = await axios.get('http://localhost:5000/doctor/doctordata')
    setdoctordetials(response.data)
  }

  useEffect(() => {
    getname()
  }, [])

  useEffect(() => {
    getdoctordata()
  }, [])

  const opendetails = async (id) => {
    const filtered_id = doctordetails.filter((item) => (
      item.id === id
    ))
    let finalid = filtered_id[0].id
    navigate('/select', { state: { id: finalid } })

  }

  return (
    <>


      {doctordetails.length === 0 ? <div>Sorry No doctor Availble at this time ! </div> : <div className="user-home-content container mt-5">
        <div className='container show-grid'>
          {doctordetails.map((data, index) => (
            <div key={data.id} className='border border-light border-2 rounded shadhow show-doctors' >
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
                <Button variant='contained' className='w-75 mb-2' onClick={() => { opendetails(data.id) }}>Book appointment</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      }

    </>
  )
}
