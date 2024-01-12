import React from 'react'
import './Banner.css'

function Banner({BannerData}) {
  console.log("banenr data",BannerData)
  const { heading,image,description } = BannerData
  return (
    <section className="itineraries_banner">
    <div className="itineraries_parent">
      <img src={image} alt="" />
      <div className="experience-banner-heading" data-aos="zoom-in">
        <div className="des-ban-heading">
          <span className="text-white">{description}</span>
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner