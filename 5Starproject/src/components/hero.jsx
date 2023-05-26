import React from 'react'
import Email from './email'
import hero from '../images/hero-image.webp'

export default function Hero(){
    return(
        <section id='hero'>
            <div className='left-content'>
                <p className='company-name'>5StarMums</p>
                <h1>The <span className='blue'>unique postpartum solution</span> to the problems <br />women face</h1>
                <p className='sub-topic'>Join our community and find support on your journey to <br />
                motherhood-together, we can overcome postpartum stress!</p>
                <div className='form'>
                <a href='https://www.5starmums.com/Community/register' target='_self' className='btn btn-primary'>Join Community</a>
                </div>
            </div>
            <div className='right-content'>
                <img src={hero} />
            </div>
        </section>
    )
}