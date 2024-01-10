import React from 'react'
import './Banner.css'

function Banner({BannerData}) {
  const { BannerImg, heading, para } = BannerData
  return (
    <section className="itineraries_banner">
    <div className="itineraries_parent">
      <img src={BannerImg} alt="" />
      <div className="experience-banner-heading" data-aos="zoom-in">
        <div className="des-ban-heading">
          <span className="text-white">{para}</span>
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner