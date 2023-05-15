import React, { useState } from 'react'
import Email from './email'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/Logo.webp'

export default function Footer(){

    const [email, setEmail] = useState('')

    function handleChange(event){
        setEmail(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        setEmail('')
        console.log('Submitted')
    }

    return(
        <section id='footer'>
            <div id='footer-content'>
                <div className='logo'>
                    <img src={logo} />
                </div>

                <div className='footer-links'>
                    <ul>
                        <a><b>Product</b></a>
                        <a href='https://www.5starmums.com/Community'>Login</a>
                        <a href='https://www.5starmums.com/Community/Register'>Sign Up</a>
                    </ul>

                    <ul>
                        <a><b>Company</b></a>
                        <a>Customer</a>
                        <a href='#aboutUs'>About Us</a>
                        <a href='#contactUs'>Contact</a>
                    </ul>

                    <ul>
                        <a><b>Resources</b></a>
                        <a>Term of services</a>
                        <a>Privacy Poacy</a>
                        <a href='#faq'>FAQs</a>
                    </ul>

                    <ul>
                        <a><b>Follow Us</b></a>
                        <a href='https://www.instagram.com/5starmums/'>Instagram</a>
                        <a href='https://www.linkedin.com/company/5starmums/'>LinkedIN</a>
                        <a href='https://twitter.com/5starmums'>Twitter</a>
                    </ul>
                </div>

                {/* <table className='table'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Company</th>
                            <th>Resources</th>
                            <th>Follow Us</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>Features</td>
                            <td>Customer</td>
                            <td>Terms of Service</td>
                            <td>Instagram</td>
                        </tr>

                        <tr>
                            <td>Log In</td>
                            <td>About Us</td>
                            <td>Privacy Poacy</td>
                            <td>ankedIn</td>
                        </tr>

                        <tr>
                            <td>Sign Up</td>
                            <td>Contact</td>
                            <td>Legal</td>
                            <td>Twitter</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>FAQs</td>
                            <td></td>
                        </tr>
                    </tbody>
                    
                </table> */}

                <div className='join'>
                    <h1>Subscribe</h1>
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <form 
                        action="https://formsubmit.co/azeezhazeezah010@gmail.com" 
                        method="POST"
                    >
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            className='input'
                            value={email}
                            onChange={handleChange}
                        />
                        <button type='submit' onSubmit={handleSubmit} className='btn btn-primary'>Subscribe</button>
                    </form>
                </div>

            </div>
            
            <p className='copyright'><FontAwesomeIcon icon={faCopyright} /> 2023 5StarMums. All right reserved</p>
        </section>
    )
}