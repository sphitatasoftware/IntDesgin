import React from 'react'
import "./Contact_pg.css"

const Contact_pg = () => {
  return (
    <div className='Contactpg_main'>
        <div className='Contactpg_intro'>
            <p className='c_1'>Get in Touch</p>
            <p className='c_2'>Contact Us</p>
            <p className='c_3'>We Love to Hear from You!</p>
        </div >
        <div className='Contactpg_content'>
            <div className='c1'>
                <img src="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

            </div>
            <div className='c1'>
                <p className='cp_t1'>Let's Discuss about your Space..</p>
                <p className='cp_t2'>Curious about the best interior designers in India? Well, you can stop looking for them because we've made a selection especially for you!</p> 
                <p className='cp_t3'>Free Consulation</p>
                <p className='cp_t3'>Budget Qoutations</p>
                <p className='cp_t3'>Ltest Technologies</p>
                <p className='cp_t3'>Eco Friendly Construction</p>
                
                </div>
                <div className='c1'>
                    <form>
                    <p className='cp_t1'>Contact'us about your Space..</p>
                        <input  placeholder='Name'></input><br/>
                        <input  placeholder='Email '></input><br/>
                        <input placeholder='Contact no'></input><br/>
                        <input placeholder='Subject'></input><br/>
                        <input  placeholder='Message'></input><br/>
                        <button>Send Message</button>
                    </form>
                
                </div>

        </div>
        {/* <div>
            <iframe src='https://www.google.co.in/maps/place/Gajapati+Palace/@18.7789147,84.0853164,14z/data=!4m5!3m4!1s0x3a3cf7646724a099:0x54c8cdbe49d68ac4!8m2!3d18.778634!4d84.0869229?hl=en&authuser=0'></iframe>
        </div> */}

    </div>
  )
}

export default Contact_pg