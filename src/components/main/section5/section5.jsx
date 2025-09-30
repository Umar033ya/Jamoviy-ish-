import React from 'react'
import './section5.css'
import payment from"./Rectangle (6).png"

function Section5() {

  return (
    <div className="body">
          <div className="section5">
        <div className="sect5-right">
          <p className='sect5-right-p1'>Checkout</p>
          <h3>When you done check out
          and get it delivered.</h3>
          <p className='sect5-right-p2'>When you done check out and get it 
          delivered with ease.</p>
        </div>
            <div className="sect5-left">
          <img src={payment} alt="rasm" />
        </div>
      </div>
    </div>
  )
}

export default Section5
