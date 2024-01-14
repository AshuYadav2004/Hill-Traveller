import React from 'react'
import './InspiredHeadingColumn.css'
import InspiredSlider from '../inspierdSlider/slider'
function InspiredHeadingColumn() {
  return (
    <div className="col-lg-7">
    <div className="uttrakhand-destination-heading">
      <div className="heading">
        <h2>
          Most Visited Destination <img className="red_circle" src="/utlity-imgs/circle_red.png" alt="" />
        </h2>
        <p>
          Uttarakhand, a northern state in India, is a treasure trove of natural beauty and spiritual significance.
          Here's a glimpse into some of its famous destinations that captivate visitors from around the world
        </p>
      </div>
      <div className="inspired-btns" data-aos="zoom-in">
        <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" href="javascript:void(0)">
          Start Planning
        </a>
        <a href="#">Connect with us</a>
      </div>
     <InspiredSlider/>
    </div>
  </div>
  )
}

export default InspiredHeadingColumn