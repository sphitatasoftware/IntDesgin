import React from 'react'
import "./Herosection.css";
import { GiTrophyCup } from "react-icons/gi";

const Herosection = () => {
  return (
    <>
    <div className='hero_bg'>
        <div className='hero_content'>
            <br/>
            <p className='hero_t1'>We have the Magicians with us....</p>
            <p className=' hero_t2'>Sidx Desgin Solutions<GiTrophyCup/></p>
            <p className='hero_t3'>Real comfort, visual and physical, is vital to every room</p>
            <button className='hero_btn'>See Our Projects</button>

        </div>
        <div className='hero_img'> 
            <img  src='https://images.pexels.com/photos/3946663/pexels-photo-3946663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
        </div>

    </div>
    </>
  )
}

export default Herosection