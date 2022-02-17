import React from 'react'
import "./first.css"
import SIP from './images/\m_SIP-Calculator.png';
import Delay from './images/\delay.png';
import Step from './images/\step.png';
import { Link } from 'react-router-dom';

// Home Page

export default function First() {
  return (
    <div className='first'>
        <div className='image1'>
           <img src={SIP} height={32} width={32}/>
        </div>
        <div className='div1'>
          <div   > 
           <Link to="/sip" className="link"><h3 >SIP Calculator</h3></Link> 
          </div>
          <p >Future projection of a SIP amount with given expected return %</p >
        </div>
        <div className='image2'>
           <img src={Delay} height={32} width={32}/>
        </div>
        <div className='div2'>
            <h3>SIP Delay Calculator</h3>
            <p >Future projection if SIP installment is delayed</p >
        </div>  

        <div className='image3'>
           <img src={Step} height={32} width={32}/>
        </div>
        <div className='div3'>
            <h3>SIP Step up Calculator</h3>
            <p >Future projection of SIP with Yearly increment i installment amount</p >
        </div>
    </div>
  )
}
