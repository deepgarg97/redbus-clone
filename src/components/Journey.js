import React, { useContext, useEffect } from 'react'
import RedBusNavbar from './Navbar'
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import JourneyContext from '../contexts/JourneyContext'
import Search from './Search';

export default function Journey({ Component }) {
    const { from, to } = useContext(JourneyContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token"))
        navigate("/login")
        else if (!from || !to)
            navigate("/");
    }, [])
    return (
        <div>
            <Toaster />
            <RedBusNavbar />
            <Search />
            <Component />
        </div>
    )
}
