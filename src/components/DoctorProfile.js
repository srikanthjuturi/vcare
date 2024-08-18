import React, { useEffect, useState } from 'react'
import './DoctorHome.css'
import doctorprofile from '../images/doctorprofile.png'

export default function DoctorProfile() {

  const [data, setdata] = useState({})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('doctordata'))
    if (data) {
      setdata(data)
    }

  }, [])

  console.log(data)


  return (
    <>
      <div className='table-div'>
        <div >
          <img src={doctorprofile} alt="" id='doctorprofile' />
        </div>
        <div>
          <table className='table table-bordered table-hover table-dark '>
            <thead>
              <tr>
                <th className='bg-secondary '>Doctor Name</th>
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
                <th className='bg-secondary'>Speciality</th>
                <td >{data.speciality}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>Date-Of-Birth</th>
                <td >{data.dateofbirth}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}
