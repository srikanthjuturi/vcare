import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function UserApointments() {

  const [data, setdata] = useState([])
  const [id, setid] = useState(null)

  const navigate = useNavigate()

  const { phonenumber } = JSON.parse(localStorage.getItem('userdata'))
  

const deleteslot=async()=>{
    try{
      if (id) {
        console.log(id)
        const response = await axios.delete(`http://localhost:5000/booking/deleteslot/${id}`,{'headers':{'Content-Type':'application/json'}})
        if (response) {
          getdata()
        }
      }
    }
    catch(e){
      console.log(e)
    }
  }
  const getdata = async () => {
    try {
      if (phonenumber) {
        const response = await axios.post('http://localhost:5000/booking/userbookingdetails', { phonenumber },{'headers':{'Content-Type':'application/json'}})
        if (response) {
          setdata(response.data)
          console.log(response.data)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  

  useEffect(() => {
    getdata()
  },[])

 

  return (
    <>
      {data.length === 0 ? <div>You Don't Have Any History</div> : <div className="user-home-content">
        <div className='container show-grid '>
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
                      <th className='bg-secondary'>Email ID</th>
                      <td >{data.email}</td>
                    </tr>
                    <tr>
                      <th className='bg-secondary'> Doctor Phone Number</th>
                      <td >{data.doctornumber}</td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div>
                <Button variant='contained' className='mb-2 bg-warning' fullWidth onClick={()=>{navigate('/rescedule',{state:data.id})}} disabled={data.slotstatus==='completed'}>Rescedule</Button>
                <Button variant='contained' className='bg-danger' fullWidth data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setid(data.id)}} disabled={data.slotstatus==='completed'}>Cancel</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      }

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-danger text-center" id="exampleModalLabel">Are You Sure To Cancel Slot ?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-secondary">
        If you delect the slot it is completly deleted from your scedule. Think before you delected the slot.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" onClick={deleteslot}>Cancel Anyway</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
