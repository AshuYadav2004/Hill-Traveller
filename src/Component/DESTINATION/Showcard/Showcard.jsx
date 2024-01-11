import React from 'react'
import './Showcard.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
function Showcard({cardData}) {
    const {
        name,
        img,
        bestTime,
        climate,
        language,
        cusin
    } = cardData
  return (
    <div id='Two-row' className="col-lg-4 col-xs-6 col-sm-4" data-aos="fade-down">
    <div className="place-main">
      <div className="place-img">
        <img src={img} alt="" />
      </div>
      <div className="place-icon-cover">
        <div className="cover-icons">
          <img src="/utlity-imgs/place-icon-1.png" alt="" />
          <h6>BEST TIME</h6>
          <p>{bestTime}</p>
        </div>
        <div className="cover-icons">
          <img src="/utlity-imgs/place-icon-2.png" alt="" />
          <h6>CLIMATE</h6>
          <p>{climate}</p>
        </div>
        <div className="cover-icons">
          <img src="/utlity-imgs/place-icon-3.png" alt="" />
          <h6>LANGAUGE</h6>
          <p>{language}</p>
        </div>
        <div className="cover-icons">
          <img src="/utlity-imgs/place-icon-4.png" alt="" />
          <h6>CUISINE</h6>
          <p>{cusin}</p>
        </div>
      </div>
    </div>
    <div className="place-content-parent">
      <div className="place-content">
        <h5>{name}</h5>
        <Link to="/explore">Explore More  <FaArrowRight /></Link>
      </div>
      <div className="planning-btn">
        <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
          Start Planning
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Showcard