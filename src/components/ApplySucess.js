import React, { useEffect } from 'react'
import './ApplySucess.css'
import { useNavigate } from 'react-router-dom';

export default function ApplySucess() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/userhome')
        }, 3000);
    }, [])
    return (
        <div className='sucess-bg'>
            <div className='h-100  align-items-center d-flex justify-content-center'>
                <h3 className='fw-bold fs-1 text-center'>Successfully Booked Your Slot</h3>
            </div>

        </div>
    )
}
