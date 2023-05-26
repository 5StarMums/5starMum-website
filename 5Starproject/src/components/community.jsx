import React from 'react'
import 'aos/dist/aos.css'
import community from '../images/community.webp'

export default function Community(){
    return(
        <section id='community'>
            <div className='left-content' data-aos='fade-up'>
                <h1 className='bold-title'>Join our community of supportive mothers </h1>
                <p className='service-content'>Start your journey to be a happier, healthier mother by joining <br />our supportive and helpful network.</p>
                <a href='https://www.5starmums.com/Community'className='btn btn-primary'>Join Now</a>
            </div>
            <div className='right-content'>
                <img src={community} />
            </div> 
        </section>
    )
}