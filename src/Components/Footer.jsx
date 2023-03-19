import React from 'react'
import './Footer.css'
import { BsLinkedin,BsInstagram,BsFacebook,BsFillTelephoneFill } from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='Footer_main'>
        <div className='Footer_content'>
            <p>The interior design business most of the sales will be done at the client's home or office as you evaluate the space, match color swatches to existing furniture and measure windows for draperies, etc</p>
        <br/><br/><br/>
        <p>@Copyright 2022</p>
        </div>
        <div className='Footer_content'>
            <h1> Our  Company</h1>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Testimonals</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className='Footer_content'>
            <h1>Get in Touch</h1>
            <ul>
                <li><BsLinkedin/>   Linkedin</li>
                <li><BsInstagram/>          Instagram</li>
                <li><BsFacebook/>    Facebook</li>
                <li>yuup</li>
            </ul>
            
            </div>
        <div className='Footer_content'>
            <h1> Contact Info</h1>
            <p> Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
                <br/><BsFillTelephoneFill/> 9583326722
                <br/><AiFillMail/> naseersonu3@gmail.com
            </p>
            
            </div>

    </div>
  )
}

export default Footer