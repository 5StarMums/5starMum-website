import React from 'react'
import 'aos/dist/aos.css'
import envelope from '../images/envelope.webp'

export default function Contact(){
    return(
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
                        <input type='email' name='email' placeholder='Enter your email' className='input contact-input'/>
                        <label>Your Message</label>
                        <textarea type='text' className='input contact-input' placeholder='Tell us what you need...' />
                        <button className='btn btn-primary'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}