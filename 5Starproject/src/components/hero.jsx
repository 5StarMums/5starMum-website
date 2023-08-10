import React from 'react'
import Email from './email'
import hero from '../images/hero-image.jpg'
import StyledHero from '../Styles/Styledhero'

export default function Hero(){
    return(
        <StyledHero>
        <section id='hero' style={{marginTop: '40px'}}>
            <div className='left-content'>
                <p className='company-name'>5StarMums</p>
                <h1>The <span className='blue'>unique postpartum solution</span> to problems <br />women face</h1>
                <p className='sub-topic'>Join our community and find support on your journey to
                motherhood. Together, we can overcome postpartum stress!</p>
                <div className='form'>
                <a href='https://5starmums.com/register/' target='_self' className='btn btn-primary'>Join Community</a>
                </div>
            </div>
            <div className='right-content'>
                <img src={hero} className='hero-img'/>
            </div>
        </section>
        </StyledHero>
    )
}