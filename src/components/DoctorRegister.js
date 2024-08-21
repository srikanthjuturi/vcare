import {  useState } from 'react'
import React from 'react'
import doctor from '../images/doctor.png'
import './Doctor.css'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import WarningAmberOutlinedIcon from '@mui/material/Icon'
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import '../components/DoctorHome.css'

export default function DoctorRegister() {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [backenderror, setbackederror] = useState('')

    const [doctordata, setdoctordata] = useState({
        name: '',
        password: '',
        dateofbirth: '',
        phonenumber: '',
        gender: '',
        speciality: ''
    }
    )

    const [error, seterror] = useState({
        name: '',
        password: '',
        dateofbirth: '',
        phonenumber: '',
        gender: '',
        speciality: ''
    })

    const handledata = (e) => {
        const { name, value } = e.target
        setdoctordata(() => ({ ...doctordata, [name]: value }))
    }

    const submitdata = async () => {
        let isvalid = true

        if (doctordata.name.trim() === '') {
            seterror((error) => ({ ...error, name: 'Please Enter Your Name' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z]+| [a-z]$/.test(doctordata.name.trim()))) {
            seterror((error) => ({ ...error, name: 'Please Enter only Alfabets ' }))
            isvalid = false
        }
        else if (doctordata.name.trim().length < 3) {
            seterror((error) => ({ ...error, name: 'Please Enter Minimum 3' }))
            isvalid = false
        }
        else if (doctordata.name.trim().length > 50) {
            seterror((error) => ({ ...error, name: 'Please Enter Maxmimum 50' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, name: '' }))
        }

        // ______________

        if (doctordata.password.trim() === '') {
            seterror((error) => ({ ...error, password: 'Please Enter Password' }))
            isvalid = false
        } else if (doctordata.password.trim().length < 5) {
            seterror((error) => ({ ...error, password: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (doctordata.password.trim().length > 10) {
            seterror((error) => ({ ...error, password: 'Please Enter Maxmimum 10' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, password: '' }))
        }
        // _____________
        if (doctordata.phonenumber.trim() === '') {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter phone number' }))
            isvalid = false
        }
        else if (!(/^\d+$/.test(doctordata.phonenumber.trim()))) {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter only numbers' }))
            isvalid = false;
        }
        else if (doctordata.phonenumber.trim().length < 10 || doctordata.phonenumber.trim().length > 10) {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter valid phone number' }))
            isvalid = false;
        }
        else {
            seterror((error) => ({ ...error, phonenumber: '' }))
        }
        // ________
        if (doctordata.speciality.trim() === '') {
            seterror((error) => ({ ...error, speciality: 'Please Enter Your speciality' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z] ||\s+$/.test(doctordata.speciality.trim()))) {
            seterror((error) => ({ ...error, speciality: 'Please Enter only Alfabets' }))
            isvalid = false
        }
        else if (doctordata.speciality.trim().length < 5) {
            seterror((error) => ({ ...error, speciality: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (doctordata.speciality.trim().length > 10) {
            seterror((error) => ({ ...error, speciality: 'Please Enter Maxmimum 10' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, speciality: '' }))
        }

        if (doctordata.gender === '') {
            seterror((error) => ({ ...error, gender: 'please select your gender' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, gender: '' }))

        }

        const userdate = new Date(doctordata.dateofbirth).getFullYear()
        const mindate = new Date().getFullYear() - 20
        const maxdate = new Date().getFullYear() - 100

        if (doctordata.dateofbirth === '') {
            seterror((error) => ({ ...error, dateofbirth: 'please Enter your date of birth' }))
            isvalid = false
        } else if (userdate > mindate) {
            seterror((error) => ({ ...error, dateofbirth: 'Below 18 years are not alligible for doctor' }))
            isvalid = false
        }
        else if (userdate < maxdate) {
            seterror((error) => ({ ...error, dateofbirth: 'Above 100 Years are not alligible for doctor' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, dateofbirth: '' }))

        }


        if (isvalid) {
            setshow(true)
            try {
                const response = await axios.post('http://localhost:5000/doctor/register', { doctordata: doctordata },
                    { headers: { "Content-Type": 'application/json' } })
                if (response.status === 200) {  // Assuming status code 200 indicates success
                    navigate('/doctorlogin');
                    setshow(false)
                } else {
                    console.error("Unexpected response status:", response.status);
                    setshow(false)
                }
            }
            catch (err) {
                console.log(err)
                setshow(false)
                setbackederror(err.response.data)
                setTimeout(() => {
                    setbackederror('')
                }, 3000);
            }
        }
    }


    return (
        <>
            <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
        <div onClick={()=>{navigate('/')}}>
          <img src={img} alt="" id='general-logo' style={{ cursor: 'pointer' }} />
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
            
            </ul>
          </div>
        </div>
      </nav>
            <div className='doctor-regiter-parent'>
                <div className="doctor-register">
                    <h1 className='text-center'><span><img src={doctor} alt="" className='doctor-img-in-register' /></span> Life Doctor Profile</h1>
                    {backenderror && <p className='text-danger text-center border p-2 border-danger border-2 rounded'><WarningAmberOutlinedIcon className='me-2' /> {backenderror}</p>}
                    <div className='input-parent'>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <br />
                            <input className='input-childs' type="text" value={doctordata.name} onChange={handledata} id='name' name='name' placeholder='Enter Name' />
                            {error.name && <p className='text-danger'>{error.name}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input-childs' type="password" id='password' value={doctordata.password} onChange={handledata} name='password' placeholder='Enter Password' />
                            {error.password && <p className='text-danger'>{error.password}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="date">Date of Birth</label>
                            <br />
                            <input className='input-childs' type="date" name='dateofbirth' value={doctordata.dateofbirth} onChange={handledata} style={{ textTransform: 'uppercase' }} id='date' />
                            {error.dateofbirth && <p className='text-danger'>{error.dateofbirth}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="g">Gender</label>
                            <br />
                            <input className='form-check-input' type="radio" value='male' checked={doctordata.gender === 'male'} onChange={handledata} name='gender' id='male' />
                            <label htmlFor="male" className='ms-2'> Male </label>

                            <input className='form-check-input ms-3' type="radio" name='gender' value='female' checked={doctordata.gender === 'female'} onChange={handledata} id='female' />
                            <label htmlFor="female" className='ms-2'> Female</label>
                            {error.gender && <p className='text-danger'>{error.gender}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="phone">Mobile Number</label>
                            <br />
                            <input className='input-childs' type="text" value={doctordata.phonenumber} onChange={handledata} name='phonenumber' placeholder='Enter Phone number' id='phone' />
                            {error.phonenumber && <p className='text-danger'>{error.phonenumber}</p>}

                        </div>

                        <div className="input">
                            <label htmlFor="speciality">Speciality</label>
                            <br />
                            <input className='input-childs' type="text" id='speciality' value={doctordata.speciality} onChange={handledata} name='speciality' />
                            {error.speciality && <p className='text-danger'>{error.speciality}</p>}

                        </div>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <Button variant='contained' className='mt-4 p-2 w-75' color='success' fullWidth onClick={submitdata}>Register</Button>
                    </div>
                </div>


                {show && <span className="loader"></span>}
            </div>
            <div className="home-footer bg-dark mt-5 p-2">
                <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
            </div>
        </>
    )
}
