import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UserHome.css'

export default function DoctorAppoint() {

const [data,setdata]= useState([])

const getdata=async()=>{
  try{
    const response = await axios.get('http://localhost:5000/booking/bookingdetials')
    if(response.status===200){
      setdata(response.data)
    }
  }catch(e){

  }
}

useEffect(()=>{
  getdata()
},[])

console.log(data)


  return (
    <>
      {data.length === 0 ? <div>You Don't Have Any History</div> : <div className="user-home-content">
        <div className=' show-grid '>
          {data.map((data, index) => (
            <div key={data.id} className='border border-light border-2 rounded shadhow  show-doctors' >
              <div className={data.slotstatus}>
                <h1>{data.slotstatus}</h1>
              </div>
              <div className='responsive'>
                <table className='table table-bordered table-hover table-striped table-dark '>
                  <thead>
                    <tr>
                      <th className='bg-secondary'>Appointment Date</th>
                      <td >{data.dates}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'>Slot Time</th>
                      <td >{data.slot}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'>Patient Name</th>
                      <td >{data.username}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'>Gender</th>
                      <td >{data.gender}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'>Email ID</th>
                      <td >{data.email}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'> patient Phone Number</th>
                      <td >{data.phonenumber}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'>Patient Address</th>
                      <td >{data.state}, {data.city}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
    </>
  )
}
