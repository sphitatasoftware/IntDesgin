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
                    <form action="https://formspree.io/f/xvonwood"
            method="POST">
                    <p className='cp_t1'>Contact'us about your Space..</p>
                        <input  placeholder='Name' name="username" required autoComplete="off"></input><br/>
                        <input  placeholder='Email ' name="Email" required autoComplete="off"></input><br/>
                        <input  type='mobile' placeholder='Contact no' name="Contact no" required autoComplete="off"></input><br/>
                        <input placeholder='Subject' name="Subject" required autoComplete="off"></input><br/>
                        <input type='textarea' placeholder=' Enter your Message'name="Message" required autoComplete="off"></input><br/>
                        <button>Send Message</button>
                    </form>
                
                </div>

        </div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.916088549329!2d77.72263971426376!3d12.977218618267498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b18c1e15cb%3A0x8e3d45c91c3a107d!2sCHRIS%20HOTELS!5e0!3m2!1sen!2sin!4v1680023292716!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>


    </div>
  )
}

export default Contact_pg