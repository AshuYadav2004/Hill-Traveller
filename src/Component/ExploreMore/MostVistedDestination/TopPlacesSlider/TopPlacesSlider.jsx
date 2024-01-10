import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './TopPlacesSlider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TopPlacesSlider = ({ slides }) => {
  const sliderSettings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <FaArrowRight/>,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className='custom-slider'>
      {slides.map((slide, index) => (
        <div key={index} className="places_head" data-aos="fade-down">
          <div className="place_item_parent">
            <div className="places_child">
              <div className="places_img">
                <img src={slide.image} alt="" />
              </div>
              <div className="bottom_head">
                <h6>{slide.title}</h6>
              </div>
            </div>
            <div className="place_bottom_text">
              <p>{slide.description}</p>
              <div className="read_more_btn">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TopPlacesSlider;
