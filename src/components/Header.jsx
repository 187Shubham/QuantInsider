"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import ShimmerButton from './ui/shimmer-button'
import { Link } from 'react-router-dom'

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div>
            <div className='flex justify-between items-center px-6 gap-2 sm:px-10 lg:px-20 py-4 tracking-tighter'>
                {/* Logo Section */}
                <Link to="/">
                    <img src='./logo.png' alt='Quant Insider' className='h-7 sm:h-8 md:h-10' />
                </Link>

                {/* Navigation Section */}
                <div className='flex-1 flex justify-center space-x-2 sm:space-x-4 lg:space-x-6 items-center font-sans font-lg text-base sm:text-base md:text-lg sm:backdrop-blur-xl'>
                    <Link to="/education"><h1>Education</h1></Link>
                    <Link to="enterprise"><h1>Enterprise</h1></Link>
                    <Link onClick={() => scrollToSection("contact-us")}><h1>Contact Us</h1></Link>

                    {/* Hidden on smaller screens */}
                    <Link onClick={() => scrollToSection("event")} className="hidden lg:block"><h1>Events</h1></Link>

                </div>


                {/* Button Section */}
                <Link to="https://quantinsider.algobulls.com/" target='_blank' className="hidden sm:block">
                    <ShimmerButton>Algo Trading Platform</ShimmerButton>
                </Link>
            </div>
        </div>

    )
}

export default Header