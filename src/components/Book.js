import React, { useEffect, useState } from 'react'
import './Book.css'
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import logout from '../images/logout.png'
import list1 from '../images/verified.png'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function Book() {
  const navigate = useNavigate()
  const location = useLocation()
  const doctorphonenumber = location.state.doctorphonenumber
  const [bookingdata, setbookingdata] = useState({})

  const [bookingdetails, setbookingdetails] = useState({
    date: '',
    slot: ''
  })

  const [error, seterror] = useState({
    date: '',
    slot: ''
  })


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userdata'))
    setbookingdata(() => ({ ...data, doctorphonenumber }))
  }, [doctorphonenumber])

  useEffect(() => {
    setbookingdata((bookingdata) => ({ ...bookingdata, bookingdetails }))
  }, [bookingdetails])

  const changedata = (e) => {
    const { name, value } = e.target;
    setbookingdetails(() => ({ ...bookingdetails, [name]: value }))
  }


  const handledata = async () => {

    let isvalid = true
    let userdate = new Date(bookingdetails.date)
    let currentdate = new Date()
    const deffernce = userdate - currentdate

    const days = Math.round(deffernce / (24 * 60 * 60 * 1000))
    const correct = days

    if (bookingdetails.date === '') {
      seterror((error) => ({ ...error, date: 'please select your date of Appointment' }))
      isvalid = false
    } else if (userdate < currentdate) {
      seterror((error) => ({ ...error, date: 'please select today or with in 20 days' }))
      isvalid = false
    }
    else if (correct >= 20) {
      seterror((error) => ({ ...error, date: 'please select with in 20 days' }))
      isvalid = false
    }
    else {
      seterror((error) => ({ ...error, date: '' }))
    }

    if (bookingdetails.slot === '') {
      seterror((error) => ({ ...error, slot: 'please select your slot ' }))
      isvalid = false
    }
    else {
      seterror((error) => ({ ...error, slot: '' }))
    }

    if (isvalid) {
      console.log(bookingdata)
      try {
        const response = await axios.post('http://localhost:5000/booking/doctor', { bookingdata }, { headers: { 'Content-Type': 'application/json' } })
        console.log(response)
        navigate('/success')
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <>
      <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div>
          <img src={img} alt="" id='general-logo' onClick={() => { navigate('/userhome/doctordetials') }} style={{ cursor: 'pointer' }} />
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
          <h3 className='text-center'> <span><img src={list1} alt="" className='me-1' style={{ width: '40px', height: '40px' }} /></span> Proceed With Your Appointment</h3>
          <div className='mt-4'>
            <div>
              <label htmlFor="date">Date of Appiontment</label><br />
              <input type="date" name="date" id="date" value={bookingdetails.date} onChange={changedata} className='w-100 p-2 mt-1' style={{ textTransform: 'uppercase' }} />
              {error && <p className='text-danger mt-1'>{error.date}</p>}
            </div>
            <div >
              <span>   <p className='mt-2'>Preferred Slot</p></span>
              <input type="radio" name='slot' checked={bookingdetails.slot === "9AM - 10AM"} onChange={changedata} value="9AM - 10AM" id="slot" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot" className='form-check-label'> 9 AM - 10 AM</label>
              <input type="radio" checked={bookingdetails.slot === "10AM - 11AM"} name='slot' onChange={changedata} value="10AM - 11AM" id="slot1" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot1" className='form-check-label'> 10 AM - 11 AM</label>
              <input type="radio" checked={bookingdetails.slot === "11AM - 12AM"} name='slot' onChange={changedata} value="11AM - 12AM" id="slot2" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot2" className='form-check-label'> 11 AM - 12 AM</label>
              <br />
              <input type="radio" checked={bookingdetails.slot === "2PM - 3PM"} name='slot' onChange={changedata} value="2PM - 3PM" id="slot3" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot3" className='form-check-label'> 2 PM - 3 PM</label>
              <input type="radio" checked={bookingdetails.slot === "3PM - 4PM"} name='slot' onChange={changedata} value="3PM - 4PM" id="slot4" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot4" className='form-check-label'> 3 PM - 4 PM</label>
              <input type="radio" checked={bookingdetails.slot === "4PM - 5PM"} name='slot' onChange={changedata} value="4PM - 5PM" id="slot5" className='form-check-input ms-2 me-2' />
              <label htmlFor="slot5" className='form-check-label'> 4 PM - 5 PM</label>
              {error && <p className='text-danger mt-2'>{error.slot}</p>}
            </div>
            <div className='mt-4'>
              <Button variant='contained' color='success' fullWidth onClick={handledata}>Confirm Your Appointment</Button>
            </div>
            <div className='mt-3'>
              <Button color='warning' variant='outlined' fullWidth onClick={() => { navigate('/userhome/doctordetails') }}>Go Back</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer bg-dark mt-5 p-2">
        <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
      </div>
    </>
  )
}
