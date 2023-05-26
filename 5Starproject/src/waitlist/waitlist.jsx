import React from 'react';
import Navbar from '../components/navbar';
import StyledWaitlist from './StyledWaitlist';

function Waitlist() {
  return (
    <>
    <Navbar />
    <StyledWaitlist>
    <div>
       <h2> Thank you for joining our waitlist  </h2>
        <a href='/'>Return to home page</a>
    </div>
    </StyledWaitlist>
    </>
  )
}

export default Waitlist