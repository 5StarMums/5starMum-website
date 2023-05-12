import React, { useState } from 'react'
import Email from './email'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.svg'

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
                        <li><b>Product</b></li>
                        <li>Features</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>

                    <ul>
                        <li><b>Company</b></li>
                        <li>Customer</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                    <ul>
                        <li><b>Resources</b></li>
                        <li>Term of services</li>
                        <li>Privacy Policy</li>
                        <li>Legal</li>
                        <li>FAQs</li>
                    </ul>

                    <ul>
                        <li><b>Follow Us</b></li>
                        <li>Instagram</li>
                        <li>LinkedIN</li>
                        <li>Twitter</li>
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
                            <td>Privacy Policy</td>
                            <td>LinkedIn</td>
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