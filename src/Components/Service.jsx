import React from 'react'
import './Service.css'
import { BsFillCalendarCheckFill,BsHouseFill } from "react-icons/bs";
import{FaCube,FaSuitcase} from "react-icons/fa";
import {HiBuildingOffice2} from "react-icons/hi2";
import{BiWrench} from"react-icons/bi";
const Service = () => {
  return (
    <div className='Service_main'>
        <p className='srr'>Every Space Count </p>
        <p id="bg-text">Every Space Count</p>
        <p className='sr'>Why Choose Us </p>
        <div className='box1'>
        <div className='sr_1'>
            <BsFillCalendarCheckFill/>
            <p className='sr_t1'>Building Planning</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>
        </div>
        <div className='sr_1'>
            <FaCube/>
            <p className='sr_t1'>Interior Space</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>
        </div>
        <div className='sr_1'>
            <HiBuildingOffice2/>
            <p className='sr_t1'>Small Offices</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>

        </div>
</div>
<div className='box2'>
            <div className='sr_2'>
                <BiWrench/>
            <p className='sr_t1'>Renovating Spaces</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>
        </div><div className='sr_2'>
            <BsHouseFill/>
            <p className='sr_t1'>Real Estates</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>
        </div><div className='sr_2'>
            <FaSuitcase/>
            <p className='sr_t1'>Free Consultation</p>
            <p className='sr_t2'>Knowing the overall size and where doors and windows are located </p>
        </div>
        </div>

    </div>
  )
}

export default Service