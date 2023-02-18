import React, { useEffect, useRef } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const username=useRef();
    const password=useRef();
    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token"))
        navigate("/")
    },[])
    function login(){
        if(!username.current.value||!password.current.value)
        toast.error("Both the fields are required")
        else{
        localStorage.setItem("token","userToken")
        navigate("/")
        }
    }
    return (
        <>
        <Toaster/>
            <Container className='d-flex flex-column justify-content-center align-items-center bg-light m-0 mw-100' style={{ height: "100vh" }}>
                <h1>Login</h1>
                <Form.Control ref={username} className='w-50 mt-4' placeholder='Username' aria-label='Username' aria-describedby='basic-addon1' />
                <Form.Control ref={password} className='mt-4 w-50' placeholder='Password' type='password' aria-label='Username' aria-describedby='basic-addon1' />
                <Button onClick={()=>{
                    login()
                }} className='mt-5 w-50' variant='danger'>Continue to the application</Button>
            </Container>
        </>
    )
}
