import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BusResult({ bus }) {
  const navigate = useNavigate();
  return (
    <div className='row bg-white m-4 p-2 d-flex justify-content-between align-items-center'
      style={{ cursor: "pointer" }} onClick={() => {
        navigate("/book-seats");
      }}>
      <h4 className='col-md-3'>{bus.busName}</h4>
      <div className='d-flex flex-column justify-content-between col-md-3'>
        <div>DEPARTURE</div>
        <h4>{bus.departureTime}</h4>
      </div>
      <div className='d-flex flex-column col-md-3'>
        <div>ARRIVAL</div>
        <h4>{bus.arrivalTime}</h4>
      </div>
      <h4 className='col-md-3'>{bus.ticketPrice}/-</h4>
    </div>
  )
}
