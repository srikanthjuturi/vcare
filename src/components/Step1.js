    import React, { useEffect, useState } from 'react'
    import { useLocation } from 'react-router-dom'
    import './Book.css'
    import img from '../images/v-care-logo.png'
    import call from '../images/call.png'
    import logout from '../images/logout.png'
    import list1 from '../images/meeting.png'
    import check from '../images/check.png'

    import './DoctorHome.css'
    import { useNavigate } from 'react-router-dom'
    import { Button } from '@mui/material'
    import './Step1.css'
    import axios from 'axios'
    export default function Step1() {

        const location = useLocation()
        const [data, setdata] = useState({})

        const id = location.state
    console.log(id)

        useEffect(()=>{
            getdata()
        },[])

        const getdata =async()=>{
            try{
                if(id){
            const response = await axios.get(`http://localhost:5000/booking/bookingdetials/${id}`)
            setdata(response.data[0])
            }
            }catch(e){
                console.log(e)
            }
        }
    

        const navigate = useNavigate()

        const logouthandle = () => {
            localStorage.removeItem('doctordata')
            navigate('/')
        }

        const completed = async (e) => {
            try{
            if(e){
                const response = await axios.patch(`http://localhost:5000/booking/completed/${e}`,{data},{headers:{'Content-Type':'application/json'}})
                if(response){
                    getdata()
                }
            }
            }
            catch(e){
                console.log(e)
            }
        }

        return (
            <>
                <nav className="general-nav navbar navbar-expand-lg bg-dark ps-3 pe-3">
                    <div>
                        <img src={img} alt="" id='general-logo' onClick={() => { navigate('/doctorhome') }} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className='ms-auto'>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse content" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mt-4">
                                <li className="nav-item d-flex  align-items-center" onClick={() => { navigate('/doctorhome/userdetails') }}>
                                    <p className="text-light"><img src={list1} alt="" className='general-icons' /></p>
                                    <p className="text-light">Show Appointment</p>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <p className="text-light"><img src={call} alt="" className='general-icons' /></p>
                                    <p className="text-light">Call us: +91-6301815418</p>
                                </li>
                                <li className="nav-item d-flex align-items-center" onClick={logouthandle}>
                                    <p className="text-light"><img src={logout} alt="" className='general-icons' /></p>
                                    <p className="text-light">Logout</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className=' step1-div-main  container ' >
                    <div className='step1-div-inner border border-light border-2 rounded mt-4 '>
                        <div className='mt-3'>
                            <img src={check} alt="no-img" id='check-image' />
                        </div>
                        <div className='mt-5'>
                            <table className='table table-bordered table-hover table-dark '>
                                <thead>
                                    <tr>
                                        <th className='bg-secondary'> Name</th>
                                        <td >{data.username}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Email ID</th>
                                        <td >{data.email}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary '>Date-Of-Birth</th>
                                        <td >{data.dateofbirth}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary '>User ID</th>
                                        <td >{data.id}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Gender</th>
                                        <td >{data.gender}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Phone Number</th>
                                        <td >{data.phonenumber}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Date Of Appointment </th>
                                        <td >{data.dates}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Slot Time</th>
                                        <td >{data.slot}</td>
                                    </tr>
                                    <tr>
                                        <th className='bg-secondary'>Address</th>
                                        <td >{data.city}, {data.state}, {data.pincode}</td>
                                    </tr>
                                </thead>
                            </table>
                            <Button variant='contained' className='bg-primary mb-2 completed-btn'   disabled={data.slotstatus==='completed'} fullWidth   data-bs-toggle="modal" data-bs-target="#exampleModal" >Completed</Button>
                        </div>

                    </div>

                </div>


                <div className="home-footer bg-dark mt-5 p-2">
                    <p className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</p>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5 text-danger text-center" id="exampleModalLabel">Are You Sure ?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body text-secondary">
            If you Click on completed mean's the slot is completed.
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success"  data-bs-dismiss="modal"  onClick={()=>{completed('completed')}}>Completed</button>
        </div>
        </div>
    </div>
    </div>

            </>
        )
    }
