import React from 'react'
import 'aos/dist/aos.css'
import fundraising from '../images/fundraising.webp'
import Styledfundraise from '../Styles/StyledfundRaise'
export default function Fundraising(){

    return(
        <Styledfundraise>
        <section id='fundraising' data-aos='fade-up'>
            <div className='left-content'>
                <h1 className='bold-title'>Fundraise for a great cause</h1>
                <p className='service-content'>We are hoping to raise $50,000 to help 5StarMums reach 100,000 new mums because no mother in our community should lack support. Please donate today to help us save, support and change lives</p>
                <a href='https://flutterwave.com/donate/ghcmyszetbol' className='btn btn-primary'>Donate</a>
            </div>
            <div className='right-content image'>
                <img src={fundraising} />
            </div>
        </section>
        </Styledfundraise>
    )
}