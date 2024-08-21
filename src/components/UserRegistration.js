import React from 'react'
import user from '../images/multiple-user.png'
import { Button, Typography } from '@mui/material'
import { useState } from 'react';
import './Doctor.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import img from '../images/v-care-logo.png'
import call from '../images/call.png'
import '../components/DoctorHome.css'
export default function UserRegistration() {
    const navigate = useNavigate()
    const [userdata, setuserdata] = useState({ name: '', password: '', dateofbirth: '', phonenumber: '', gender: '', email: '', city: '', state: '', pincode: '', country: '' })
    const [error, seterror] = useState({ name: '', password: '', dateofbirth: '', phonenumber: '', gender: '', email: '', city: '', state: '', pincode: '', country: '' })
    const [backenderror, setbackederror] = useState('')
    const [show, setshow] = useState(false)
    const handledata = (e) => {
        const { name, value } = e.target
        setuserdata(() => ({ ...userdata, [name]: value }))
    }

    const submitdata = async () => {
        let isvalid = true

        if (userdata.name.trim() === '') {
            seterror((error) => ({ ...error, name: 'Please Enter Your Name' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z]+|\s$/.test(userdata.name.trim()))) {
            seterror((error) => ({ ...error, name: 'Please Enter only Alphabets ' }))
            isvalid = false
        }
        else if (userdata.name.trim().length < 3) {
            seterror((error) => ({ ...error, name: 'Please Enter Minimum 3' }))
            isvalid = false
        }
        else if (userdata.name.trim().length > 50) {
            seterror((error) => ({ ...error, name: 'Please Enter Maxmimum 50' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, name: '' }))
        }
        // __________________________
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (userdata.email.trim() === '') {
            seterror((error) => ({ ...error, email: 'Please Enter Your Email' }))
            isvalid = false
        }
        else if (!(email.test(userdata.email.trim()))) {
            seterror((error) => ({ ...error, email: 'Please Enter vaild Email' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, email: '' }))
        }
        // ______________

        if (userdata.password.trim() === '') {
            seterror((error) => ({ ...error, password: 'Please Enter Password' }))
            isvalid = false
        } else if (userdata.password.trim().length < 5) {
            seterror((error) => ({ ...error, password: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (userdata.password.trim().length > 10) {
            seterror((error) => ({ ...error, password: 'Please Enter Maxmimum 10' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, password: '' }))
        }
        // ________________________

        if (userdata.pincode.trim() === '') {
            seterror((error) => ({ ...error, pincode: 'Please Enter pincode' }))
            isvalid = false
        } else if (!(/^\d+$/.test(userdata.pincode.trim()))) {
            seterror((error) => ({ ...error, pincode: 'Please Enter Numbers' }))
            isvalid = false
        }
        else if (userdata.pincode.trim().length < 6) {
            seterror((error) => ({ ...error, pincode: 'Please Enter valid pincode' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, pincode: '' }))
        }
        // _____________
        if (userdata.phonenumber.trim() === '') {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter phone number' }))
            isvalid = false
        }
        else if (!(/^\d+$/.test(userdata.phonenumber.trim()))) {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter only numbers' }))
            isvalid = false;
        }
        else if (userdata.phonenumber.trim().length < 10 || userdata.phonenumber.trim().length > 10) {
            seterror((error) => ({ ...error, phonenumber: 'Please Enter valid phone number' }))
            isvalid = false;
        }
        else {
            seterror((error) => ({ ...error, phonenumber: '' }))
        }
        // ________
        if (userdata.city.trim() === '') {
            seterror((error) => ({ ...error, city: 'Please Enter Your city' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z] ||\s+$/.test(userdata.city.trim()))) {
            seterror((error) => ({ ...error, city: 'Please Enter only Alfabets' }))
            isvalid = false
        }
        else if (userdata.city.trim().length < 5) {
            seterror((error) => ({ ...error, city: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (userdata.city.trim().length > 30) {
            seterror((error) => ({ ...error, city: 'Please Enter Maxmimum 30' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, city: '' }))
        }
        // _________________
        if (userdata.state.trim() === '') {
            seterror((error) => ({ ...error, state: 'Please Enter Your state' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z] ||\s+$/.test(userdata.state.trim()))) {
            seterror((error) => ({ ...error, state: 'Please Enter only Alfabets ' }))
            isvalid = false
        }
        else if (userdata.state.trim().length < 5) {
            seterror((error) => ({ ...error, state: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (userdata.state.trim().length > 30) {
            seterror((error) => ({ ...error, state: 'Please Enter Maxmimum 30' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, state: '' }))
        }
        // ______________________________
        if (userdata.country.trim() === '') {
            seterror((error) => ({ ...error, country: 'Please Enter Your Country' }))
            isvalid = false
        }
        else if (!(/^[a-zA-Z] ||\s+$/.test(userdata.country.trim()))) {
            seterror((error) => ({ ...error, country: 'Please Enter only Alfabets' }))
            isvalid = false
        }
        else if (userdata.country.trim().length < 5) {
            seterror((error) => ({ ...error, country: 'Please Enter Minimum 5' }))
            isvalid = false
        }
        else if (userdata.country.trim().length > 30) {
            seterror((error) => ({ ...error, country: 'Please Enter Maxmimum 30' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, country: '' }))
        }

        // ____________
        if (userdata.gender === '') {
            seterror((error) => ({ ...error, gender: 'please select your gender' }))
            isvalid = false
        }
        else {
            seterror((error) => ({ ...error, gender: '' }))

        }

        let userdate = new Date(userdata.dateofbirth)
        let uyear = userdate.getFullYear()
        let umonth = userdate.getMonth()
        let uday = userdate.getDate()

        let currentdate = new Date()
        let cyear = currentdate.getFullYear()
        let cmonth = currentdate.getMonth()
        let cday = currentdate.getDate()
        console.log(uday,cday)

        if (userdata.dateofbirth === '') {
            seterror((error) => ({ ...error, dateofbirth: 'please Enter your date of birth' }))
            isvalid = false
        }
        else if (cyear < uyear) {
            seterror((error) => ({ ...error, dateofbirth: 'Enter Vaild year' }))
            isvalid = false
        }
       else if (cyear === uyear){
         if (cmonth < umonth) {
            seterror((error) => ({ ...error, dateofbirth: 'Enter Vaild month' }))
            isvalid = false
        }
        else if (cmonth === umonth) {
            if (cday < uday) {
                seterror((error) => ({ ...error, dateofbirth: 'Enter Vaild date' }))
                isvalid = false
            }
        }
    }
        
        else {
            seterror((error) => ({ ...error, dateofbirth: '' }))
        }

        if (isvalid) {
            setshow(true)
            try {
                const response = await axios.post('http://localhost:5000/user/register', { userdata: userdata }, { headers: { 'Content-Type': 'application/json' } })
                if (response.status === 200) {
                    navigate('/userlogin')
                    setshow(false)
                } else {
                    console.log('unexpted error occured' + response)
                    setshow(false)
                }
            }
            catch (e) {
                setbackederror(e.response.data)
                setTimeout(() => {
                    setbackederror('')
                }, 3000);

                console.log(e)
                setshow(false)

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
                    <h1 className='text-center'><span><img src={user} alt="" className='doctor-img-in-register' /></span> User Profile</h1>
                    {backenderror && <p className='text-danger text-center border p-2 border-danger border-2 rounded'><WarningAmberOutlinedIcon className='me-2' /> {backenderror}</p>}
                    <div className='input-parent'>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <br />
                            <input className='input-childs' type="text" id='name' value={userdata.name} onChange={handledata} name='name' placeholder='Enter Name' />
                            {error.name && <p className='text-danger'>{error.name}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input-childs' type="password" value={userdata.password} onChange={handledata} id='password' name='password' placeholder='Enter Password' />
                            {error.password && <p className='text-danger'>{error.password}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input className='input-childs' type="email" id='email' value={userdata.email} onChange={handledata} name='email' placeholder='Enter Email' />
                            {error.email && <p className='text-danger'>{error.email}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="date">Date of Birth</label>
                            <br />
                            <input className='input-childs' type="date" value={userdata.dateofbirth} onChange={handledata} name='dateofbirth' id='date' />
                            {error.dateofbirth && <p className='text-danger'>{error.dateofbirth}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="g">Gender</label>
                            <br />
                            <input className='form-check-input' type="radio" checked={userdata.gender === 'male'} value='male' onChange={handledata} name='gender' id='male' />
                            <label htmlFor="male" className='ms-2'> Male </label>

                            <input className='form-check-input ms-3' type="radio" checked={userdata.gender === 'female'} value='female' onChange={handledata} name='gender' id='female' />
                            <label htmlFor="female" className='ms-2'> Female</label>
                            {error.gender && <p className='text-danger'>{error.gender}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="phone">Mobile Number</label>
                            <br />
                            <input className='input-childs' type="text" value={userdata.phonenumber} onChange={handledata} name='phonenumber' placeholder='Enter Phone number' id='phone' />
                            {error.phonenumber && <p className='text-danger'>{error.phonenumber}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="pincode">Pincode</label>
                            <br />
                            <input className='input-childs' type="text" value={userdata.pincode} onChange={handledata} id='pincode' name='pincode' placeholder='Enter Pincode' />
                            {error.pincode && <p className='text-danger'>{error.pincode}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="city">City</label>
                            <br />
                            <input className='input-childs' type="text" value={userdata.city} onChange={handledata} id='city' name='city' placeholder='Enter Your City' />
                            {error.city && <p className='text-danger'>{error.city}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="state">State</label>
                            <br />
                            <input className='input-childs' type="text" id='state' value={userdata.state} onChange={handledata} name='state' placeholder='Enter Your State' />
                            {error.state && <p className='text-danger'>{error.state}</p>}

                        </div>
                        <div className="input">
                            <label htmlFor="country">Country</label>
                            <br />
                            <input className='input-childs' type="text" value={userdata.country} onChange={handledata} id='country' name='country' placeholder='Enter Your City' />
                            {error.country && <p className='text-danger'>{error.country}</p>}

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
