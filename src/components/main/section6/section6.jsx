import React from 'react'
import './section6.css'
import bgImg from"./Rectangle 47.png"

function Section6() {

  return (
    <div className='body'>
<div className="section6" style={{backgroundImage:`url(${bgImg})`,height:"100vh"   }}>
<div className="sect6-text">
<h3>Download the app now.</h3>
<p>Available on your favorite store. Start your premium experience now</p>
</div>
<div className="sect6-button">
  <button className='btn-playstore'>Playstore</button>
  <button className='btn-appstor'>App store</button>
</div>
</div>
    </div>
  )
}

export default Section6
