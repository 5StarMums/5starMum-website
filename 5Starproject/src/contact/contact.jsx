import React from 'react';
import Navbar from '../components/navbar';
import StyledWaitlist from './StyledWaitlist';

function Contact() {
  return (
    <>
    <Navbar />
    <StyledWaitlist>
    <div>
       <h2> Thank you for contacting us  </h2>
        <a href='/'>Return to home page</a>
    </div>
    </StyledWaitlist>
    </>
  )
}

export default Contact