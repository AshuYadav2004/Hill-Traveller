import React from 'react'
import { Link } from 'react-router-dom'
import './HolidaySection.css'

function HolidaySection() {
  return (
    <section className="holidays-sec" data-aos="fade-up">
    <div id='ram' className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-6 video-cover">
          <div className="holi-heading">
            <span className="left-align">ABOUT <img className="red_circle" src="../../../../public/utlity-imgs/circle_red.png" alt="" style={{height:"10px"}}/></span>
            <h2>Hilltraveller Holidays</h2>
            <p>Hilltraveller.com is a Unit of Have a Nice Trip Private Limited. It is registered as a Private Limited company with the Ministry of Corporate Affairs, India.</p>
            <p>It is an upcoming travel service provider for India Asia Continent covering All over India with a commitment to provide high-end quality service to our customers......</p>
            <div className="learn-more-btn">
              <Link to="/about-us">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div  className="col-lg-6 col-sm-6 video-cover">
          <video className="w-100" autoPlay loop muted>
            <source src="/utlity-imgs/kedarnath.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HolidaySection