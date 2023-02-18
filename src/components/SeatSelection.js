import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import "../styles/seat.css"

export default function SeatSelection() {
    const [selectedSeat, setSelectedSeat] = useState([]);
    function seatNum(i,j){
        return 8*i+j+1;
    }
    
    return (
        <Container className='bg-danger mw-100 p-4 d-flex justify-content-center align-items-center'>
            <div className='seats bg-white p-2 flex-column'>
                {[1, 2, 3].map((seatRow, i) => {
                    return <div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                            return <div onClick={() => {
                                const prevSeat=[...selectedSeat];
                                if(selectedSeat.includes(seatNum(i,j))){
                                    const newSeats=prevSeat.filter(currSeat=>{
                                        return currSeat!==seatNum(i,j);
                                    })
                                    setSelectedSeat([...newSeats]);
                                }
                                else{
                                setSelectedSeat([...prevSeat,seatNum(i,j)]);
                                }
                            }} className={`seat ${selectedSeat.includes(seatNum(i,j)) ? "bg-success" : ""}`} key={seatNum(i,j)} ></div>
                        })}</div>
                })}
                {selectedSeat.length?<Button variant='success rounded-0 mt-4'>Book Seats</Button>:null}
            </div>
        </Container>
    )
}
