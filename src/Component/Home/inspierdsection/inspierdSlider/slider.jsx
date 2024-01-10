import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const InspiredSection = () => {


    const NextArrow = ({ onClick }) => (
        <div className="arrow-next" onClick={onClick}>
          <FaChevronRight size={30} color="white" />
        </div>
      );
    
      const PrevArrow = ({ onClick }) => (
        <div className="arrow-prev" onClick={onClick}>
          <FaChevronLeft size={30} color="white" />
        </div>
      );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slideItems = [
    { id: 1, imageSrc: "/utlity-imgs/Chopta.jpg", text: "Chopta" },
    { id: 2, imageSrc: "/utlity-imgs/Auli.jpg", text: "Auli" },
    { id: 3, imageSrc: "/utlity-imgs/Rafting.jpg", text: "Rafting" },
    { id: 4, imageSrc: "/utlity-imgs/badrinath.jpg", text: "Badrinath" },
    { id: 5, imageSrc: "/utlity-imgs/Haridwar.jpg", text: "Haridwar" },
    { id: 6, imageSrc: "/utlity-imgs/rishikesh.jpg", text: "Rishikesh" },
    { id: 7, imageSrc: "/utlity-imgs/dhanaulti.jpg", text: "Dhanaulti" },
    { id: 8, imageSrc: "/utlity-imgs/Harsil.jpg", text: "Harsil" },
    // Add more items as needed
  ];

  

  return (
    <div className="inspired-slider-wrp owl-carousel owl-theme nxt-prv">
      <Slider {...settings}>
        {slideItems.map((item) => (
          <div key={item.id} className="img-conatainer">
            <div className="slide-item">
              <img src={item.imageSrc} alt={`Slide ${item.id}`} />
              <h3>{item.text}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InspiredSection;
