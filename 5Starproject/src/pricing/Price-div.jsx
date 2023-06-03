import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function PriceDiv(props) {
  return (
    <div className={props.priceClass}>
        <div>
          <div className='plans'>
            <h4>{props.planType}</h4>
            <p>{props.planUsers}</p>
          </div>
          <div className='plans'>
            <h4>{props.planPrice}/<span className='dur'>{props.planDuration}</span></h4>
          </div>
          <div className='plans2'>
            <p><FontAwesomeIcon icon={faCheckCircle} /> {props.planFeatures}</p>
            <p><FontAwesomeIcon icon={faCheckCircle} /> {props.planFeatures2}</p>
            <p className='icon'><FontAwesomeIcon icon={faCheckCircle} /> {props.planFeatures3}</p>
            <p className='icon'><FontAwesomeIcon icon={faCheckCircle} /> {props.planFeatures4}</p>
          </div>
        </div>
        <button>{props.planStatus}</button>
    </div>
  )
}

export default PriceDiv