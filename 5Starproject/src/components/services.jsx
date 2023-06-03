import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'
import Mya2 from '../images/Mya2.webp'
import dashboard1 from '../images/Dashboard1.webp'
import dashboard2 from '../images/Dashboard2.webp'
import StyledService from "../Styles/Styledservice";
export default function Services(){
    return(
        <StyledService>
        <div id='service-section'>

<div className="right-border services" data-aos='fade-right'>
                <div className="side-contents">
                    <h1 className="bold-title">Perform all in one Dashboard</h1>
                    <p className="service-content">
                    Experience the future of parenting with our AI-powered solution. Our cutting-edge technology provides insights and recommendations to help you raise a happy and healthy baby.
                    </p>
                    <form 
                        action="https://formsubmit.co/mya@5starmums.com" 
                        method="POST"
                    >
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            className='input'
                        />
                        <input type="hidden" name="_next" value="https://5starmums.com/waitlist"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button type='submit' className='btn btn-primary'>Join Waitlist</button>
                    </form>
                </div>
                <div className="gradient-borders">
                    <img src={dashboard1} />
                </div>
            </div>
            <div className="left-border services" data-aos='fade-left'>
                <div className="gradient-borders">  <img src={Mya2} /> </div>
                <div className="side-contents">
                    <p className="service-title">Introducing <span className="orange">Mya</span></p>
                    <h1 className="bold-title"><span className="blue">Smart </span>Childcare at your <span className="blue">fingertips</span></h1>
                    <p className="service-content">
                    We understand that being a parent is a full-time job, and you don't always have the luxury of sitting down with an expert for advice. That's why our AI product is designed to provide expert guidance whenever and wherever you need it.
                    </p>
                    <form 
                        action="https://formsubmit.co/mya@5starmums.com" 
                        method="POST"
                    >
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            className='input'
                        />
                        <input type="hidden" name="_next" value="https://5starmums.com/waitlist"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button type='submit' className='btn btn-primary'>Join Waitlist</button>
                    </form>
                    <button className="btn btn-secondary">Watch Demo</button>

                    <div className="advantages">
                        <p><FontAwesomeIcon icon={faClock} className="clock-icon"/> Free to use</p>
                        <p><FontAwesomeIcon icon={faClock} className="clock-icon"/> Up to date</p>
                        <p><FontAwesomeIcon icon={faClock} className="clock-icon"/> Supportive</p>
                    </div>
                </div>
            </div>

            <div className="left-border services" data-aos='fade-left'>
                <div className="gradient-borders">
                <img src={dashboard2} />                   
                </div>
                <div className="side-contents">
                    <h1 className="bold-title">Set task and accomplish them</h1>
                    <p className="service-content">
                    The moment you set tasks, Mya becomes your alarm. With our AI Assistant, every task you accomplish, you score points, likewise you lose points if you miss more than 3 tasks in a day. 
                    </p>
                    <form 
                        action="https://formsubmit.co/mya@5starmums.com" 
                        method="POST"
                    >
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            className='input'
                        />
                        <input type="hidden" name="_next" value="https://5starmums.com/waitlist"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button type='submit' className='btn btn-primary'>Join Waitlist</button>
                    </form>
                </div>
            </div>

        </div>
        </StyledService>
    )
}