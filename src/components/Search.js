import React, { useContext, useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import {BsArrowLeftRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import JourneyContext from '../contexts/JourneyContext';

function Search() {
    const navigate=useNavigate();
    const {from,to,setfrom,setTo}=useContext(JourneyContext);
    const [jDate,setJdate]=useState("");
    function interchangeFromTo(){
        const strt=from;
        setfrom(to);
        setTo(strt);
    }
    function searchBuses(){
        if(!from||!to||!jDate)
        toast.error("All fields are required")
        else
        navigate("/results");
    }
    return (
        <Container>
            <div className='m-5'>
                <InputGroup className="mb-3 flex align-items-center">
                    <Form.Control value={from} placeholder='From' aria-label="Text input with dropdown button" onChange={(e)=>{
                        setfrom(e.target.value)
                    }} />
                    <BsArrowLeftRight className='mx-3' onClick={interchangeFromTo}/>
                    <Form.Control value={to} onChange={(e)=>{
                        setTo(e.target.value)
                    }} placeholder='To' aria-label="Text input with dropdown button" />
                    <Form.Control value={jDate} onChange={(e)=>{
                        setJdate(e.target.value)
                    }} placeholder='Date' type='date' aria-label="Text input with dropdown button" />
                    <Button onClick={searchBuses} variant="danger">Search Buses</Button>
                </InputGroup>
            </div>
        </Container>
    )
}

export default Search;