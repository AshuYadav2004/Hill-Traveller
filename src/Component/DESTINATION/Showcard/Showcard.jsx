import React, { useState,useEffect } from 'react'
import './Showcard.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
function Showcard({coverimg,besthingArr,name,link,cardData}) {
   console.log("showcard",cardData,"besthingsarrr",besthingArr)
  return (
    <div id='Two-row' className="col-lg-4 col-xs-6 col-sm-4" data-aos="fade-down">
    <div className="place-main">
      <div className="place-img">
        <img src={coverimg} alt="" />
      </div>
      <div className="place-icon-cover">
       
       {
         besthingArr.slice(0,4).map((i,index)=>{
          return(
            <div className="cover-icons" key={index}>
          <img src={`/utlity-imgs/itineraries-details/${i}.png`} alt="" />
          <h6>{i}</h6>
          <p>{cardData.bestThings[i]}</p>
        </div>
          )
         })
       }
      
      </div>
    </div>
    <div className="place-content-parent">
      <div className="place-content">
        <h5>{name}</h5>
        <Link to={`/exploremore/${link}`}>Explore More  <FaArrowRight /></Link>
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