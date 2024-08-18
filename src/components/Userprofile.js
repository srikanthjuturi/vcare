import React, { useEffect, useState } from 'react'
import './DoctorHome.css'
import doctorprofile from '../images/userprofile.png'

export default function UserProfile() {
  const [data, setdata] = useState({})
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userdata'))
    setdata(data)
  }, [])
  console.log(data)

  return (
    <>
      <div className='table-div'>
        <div >
          <img src={doctorprofile} alt="" className='me-4 p-3' style={{ width: '150px' }} />
        </div>
        <div>
          <table className='table table-bordered table-hover table-dark '>
            <thead>
              <tr>
                <th className='bg-secondary '> Name</th>
                <td >{data.username}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>User ID</th>
                <td >{data.id}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>Phone Number</th>
                <td >{data.phonenumber}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>Email</th>
                <td >{data.email}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>Date-Of-Birth</th>
                <td >{data.dateofbirth}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>Password</th>
                <td >{data.passwords}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>City</th>
                <td >{data.city}</td>
              </tr>
              <tr>
                <th className='bg-secondary'>State</th>
                <td >{data.state}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

    </>
  )
}
