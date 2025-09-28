import React from 'react'
import './section1.css'
import stn1Bg from '../../../../public/section1Bg.png'

function Section1() {

  return (
    <div className='body'>
      <section className='section1' style={{
         backgroundImage: `url(${stn1Bg})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         height: "90vh"
      }}>
        <h4>Food app</h4>
        <h1>Why stay hungry when you can order form Bella Onojie</h1>
        <p>Download the bella onoje’s food app now on</p>
        <div className="btnParent">
          <button>Playstore</button>
          <button>App store</button>
        </div>
      </section>
    </div>
  )
}

export default Section1
