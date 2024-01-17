import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import rightArrow from '../../assets/rightArrow.png'
import whiteTick from '../../assets/whiteTick.png'
export const Plans = () => {
  return (
 <div className="plans-container" id='plans'>
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
    <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JORNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>
    {/* plans card */}
    <div className="plans">
        {plansData.map((plan, index)=>(
         <div className='plan' key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
                {plan.features.map((feature, index)=>(
                    <div className='feature'>
                        <img src={whiteTick} alt="White Tick" />
                        <span key={index}>{feature}</span>
                    </div>
                ))}
            </div>
            <a href='#' className='more-benefits'>See more benefits 
            <img height={12} width={12} src={rightArrow} alt="right arrow" /></a>
            <button className="btn"><span className='join-now-btn'>Join now</span></button>
         </div>   
        ))}
    </div>
 </div>
  )
}
