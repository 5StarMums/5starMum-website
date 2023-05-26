import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import profile from '../images/profile.webp'
import profile2 from '../images/profile2.webp'
import profile3 from '../images/profile3.webp'
import quote from '../images/quote.webp'
export default function Comments(){

    // HANDLING THE SLIDER ICONS

    function slideLeft(){
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    function slideRight(){
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return(
        <div className='comments-container'>
            <div id='slider' className='comments'>
                <div className='individual-comments'>
                    <img src={quote} className='quote' />
                    <p className='main-comment'>I’ve had more support in this community than any Facebook group I am on.</p>
                    <div className='comment-details'>
                        <img src={profile} className='profile' />
                        <div className='profile-info'>
                            <p className='profile-name'><b>Mary Silva</b></p>
                            <p className='profile-status'>Mother of 3</p>
                        </div>
                    </div>
                </div>

                <div className='individual-comments'>
                    <img src={quote} className='quote' />
                    <p className='main-comment'>I like it here! The women are so supportive and Mya is always there for me</p>
                    <div className='comment-details'>
                        <img src={profile2} className='profile' />
                        <div className='profile-info'>
                            <p className='profile-name'><b>Jane Bill</b></p>
                            <p className='profile-status'>Expecting Baby</p>
                        </div>
                    </div>
                </div> 

                <div className='individual-comments'>
                    <img src={quote}  className='quote' />
                    <p className='main-comment'>After my first child I had postpartum depression, then I found this community</p>
                    <div className='comment-details'>
                        <img src={profile3} className='profile' />
                        <div className='profile-info'>
                            <p className='profile-name'><b>Abbi Tessa</b></p>
                            <p className='profile-status'>Mother of 1</p>
                        </div>
                       
                    </div>
                </div> 

                {/* <div className='individual-comments'>
                    <img src='images/quote.svg' className='quote' />
                    <p className='main-comment'>After my first postpartum depression, I found this community</p>
                    <div className='comment-details'>
                        <img src='images/profile3.svg' className='profile' />
                        <p className='profile-name'>Mary Silva</p>
                        <p className='profile-status'>Mother of 3</p>
                    </div>
                </div>  */}
            </div>

            <FontAwesomeIcon onClick={slideLeft} icon={faAngleLeft} className='arrows'/>
            <FontAwesomeIcon onClick={slideRight} icon={faAngleRight} className='arrows'/>
        </div> 
    )
}

