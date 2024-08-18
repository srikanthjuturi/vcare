import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import userimg from '../images/multiple-user.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './UserHome'


export default function ShowAppointment() {
    const navigate = useNavigate()
    const [appointment, setappointment] = useState([])
    const con = appointment.every((item)=>(item.slotstatus==='completed'))
     

    const sendPhoneNumber = async (phoneNumber) => {
        try {
            const response = await axios.post('http://localhost:5000/booking/userdetails', { phonenumber: phoneNumber }, { headers: { 'Content-Type': 'application/json' } });
            if (response.status === 200) {
                setappointment(response.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const details = JSON.parse(localStorage.getItem('doctordata'));
        if (details) {
           
            if (details.phonenumber) {
                sendPhoneNumber(details.phonenumber);
            }
        }
    }, []);

    return (
        <>

        {con && <div>All appointment are completed</div>}

            {appointment.length === 0 ? <div>You Have no Oppoints today</div> : <div className="user-home-content  mt-2">
                <div className='show-grid'>
                    {appointment.map((data, index) => (
                        <div key={data.id} className={`border border-light border-2 rounded shadhow ${data.slotstatus+'show-doctors'}`} >
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={userimg} alt="" className='me-4 p-3 doctor-image-in-userhome' />
                            </div>
                            <div className='responsive'>
                                <table className='table table-bordered table-hover table-dark '>
                                    <thead>

                                        <tr>
                                            <th className='bg-secondary'>Appointment Date </th>
                                            <td >{data.dates}</td>
                                        </tr>
                                        <tr>
                                            <th className='bg-secondary'>Slot Time</th>
                                            <td >{data.slot}</td>
                                        </tr>
                                        <tr>
                                            <th className='bg-secondary'>Email ID</th>
                                            <td >{data.email}</td>
                                        </tr>
                                        <tr>
                                            <th className='bg-secondary'>Phone Number</th>
                                            <td >{data.phonenumber}</td>
                                        </tr>

                                    </thead>
                                </table>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button variant='contained' className='w-75 mb-2' onClick={() => { navigate('/step1', { state:  data.id  }) }}>full details</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </>
    )
}
