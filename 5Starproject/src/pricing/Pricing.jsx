import React from 'react';
import Navbar from '../components/navbar';
import PriceDiv from './Price-div';
import StyledPricing from './StyledPricing';

function Pricing() {
  return (
        <>
        <Navbar />
        <StyledPricing>
        <section className='pricing-section'>
            <div className='price-text'>
                <h1>“don’t go through mumming alone”</h1>
                <p>Unlock advanced features with Premium, or continue with a free plan.</p>
            </div>
            <div className='price-div-parent'>
                <PriceDiv 
                    priceClass='price-div-1' 
                    planType='Free'
                    planUsers='For Starters'
                    planPrice='$0/Forever'
                    planFeatures='Community'
                    planFeatures2='AI Assitant'
                    planStatus='Current plan'
                    />
                <PriceDiv 
                    priceClass='price-div-2' 
                    planType='Premium'
                    planUsers='For Power Users'
                    planPrice='$48/yr'
                    planFeatures='Community'
                    planFeatures2='AI Assitant'
                    planFeatures3='Reminders'
                    planFeatures4='Scheduling'
                    planStatus='Get started'
                    />
            </div> 
        </section>
        </StyledPricing>
        </>
  )
}

export default Pricing