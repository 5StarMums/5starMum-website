import React from 'react'
import 'aos/dist/aos.css'
import envelope from '../images/envelope.webp';
import { useState, useRef } from 'react';
import Styledcontact from '../Styles/Styledcontact';
export default function Contact(){
    const [contactResponse, setResponse] = useState(true)
    const mailRef = useRef();
    const messageRef = useRef();

    

    const checkResponse = () => {
        setResponse(!contactResponse)
        mailRef.current.value = '';
        messageRef.current.value = '';
    }
    return(
        <Styledcontact>
        <section id='subscribe' data-aos='fade-up'>
            <h1>Got more questions?<br />Contact Us</h1>
            <div className='envelope'>
                <div className='envelope-img'>
                    <img src={envelope} />
                </div>
                <div className='form-content'>
                    <form 
                     action="https://formsubmit.co/mya@5starmums.com" 
                     method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false"></input>
                        <label>Email Address</label>
                        <input type='email' name='email' placeholder='Enter your email' className='input contact-input' ref={mailRef}/>
                        <label>Your Message</label>
                        <input type='text' className='input contact-input' placeholder='Tell us what you need...' ref={messageRef}/>
                        <input type="hidden" name="_next" value="https://5starmums.com/contact"></input>
                        <button className='btn btn-primary' >Send</button> 
                    </form>
                </div>
            </div>
        </section>
        </Styledcontact>
    )
}