import React from 'react'
import text from './term-text'
import Navbar from '../components/navbar'
import Styledprivacy from './Styledterms'

function Privacy() {
    return (
        <Styledprivacy>
        <section className='privacy-section'>
            <Navbar />   
            <h1>5StarMums Terms and Conditions of Use</h1> 
            <div className='each-policy'>
                <p>{text[0].id} {text[0].idValue}</p>    
                <p className='text-detail'>{text[0].idText}</p>
            </div> 
            <div className='each-policy'>
                <p className='tex'>{text[1].id} {text[1].idValue}</p>    
                <p className='text-detail'>{text[1].idText}</p>
                <ul>
                    <li>{text[1].idPoint1}</li>
                    <li>{text[1].idPoint2}</li>
                    <li>{text[1].idPoint3}</li>
                    <li>{text[1].idPoint4}</li>
                    <li>{text[1].idPoint5}</li>
                </ul>
                <p className='text-detail'>{text[1].idText2}</p>                
            </div> 
            <div className='each-policy'>
                <p>{text[2].id} {text[2].idValue}</p>    
                <p className='text-detail'>{text[2].idText}</p>
            </div> 
            <div className='each-policy'>
                <p>{text[3].id} {text[3].idValue}</p>    
                <p className='text-detail'>{text[3].idText}</p>
            </div> 
            <div className='each-policy'>
                <p>{text[4].id} {text[4].idValue}</p>    
                <p className='text-detail'>{text[4].idText}</p>
            </div>  
            <div className='each-policy'>
                <p>{text[5].id} {text[5].idValue}</p>    
                <p className='text-detail'>{text[5].idText}</p>
            </div>   
            <div className='each-policy'>
                <p>{text[6].id} {text[6].idValue}</p>    
                <p className='text-detail'>{text[6].idText}</p>
            </div>  
            <div className='each-policy'>
                <p>{text[7].id} {text[7].idValue}</p>    
                <p className='text-detail'>{text[7].idText}</p>
            </div> 
            <div className='each-policy'>
                <p>{text[8].id} {text[8].idValue}</p>    
                <p className='text-detail'>{text[8].idText}</p>
            </div>                   
        </section>
        </Styledprivacy>
    )
}
export default Privacy