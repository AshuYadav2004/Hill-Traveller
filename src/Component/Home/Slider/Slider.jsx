import React from 'react'
import './slider.css'
import { FaMapMarker, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useState } from 'react';


function Slider() {
    const images = [
      {
        title:"Kedarnath",
        paragraph:"once you have tasted the sky there is no lookin back",
        link:  '/Banner-imgs/kedarnath-banner.jpg',
      },
      {
        title:"Badrinath",
        paragraph:"once you have tasted the sky there is no lookin back",
        link:  '/Banner-imgs/badrinath-banner.jpg',
      }
      ,
      {
        title:"Yamnoutri",
        paragraph:"once you have tasted the sky there is no lookin back",
        link: '/Banner-imgs/yamunotri-banner.jpg',
      }
      ,
      {
        title:"Yamnoutri",
        paragraph:"once you have tasted the sky there is no lookin back",
        link: '/Banner-imgs/Experience-banner3.jpg',
      }
        
        
        
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <div className="container-fluid banner">
          <div className="row">
            <div className="col-md-8 mx-auto inner-banenr">
              <div className="card card-raised card-carousel">
                <div className="carousel-inner ">
                  {images.map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                      <img className="d-block w-100 " src={item.link} alt={`Slide ${index + 1}`} />
                      <div className="carousel-caption">
                        <h1>{item.title}</h1>
                        <p>{item.paragraph}</p>
                        <button className="button">Get in Touch</button>

                      </div>
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" role="button" onClick={handlePrev}>
                <FaArrowAltCircleLeft size={30} color="white" />
                
                </a>
                <a className="carousel-control-next" role="button" onClick={handleNext}>
                <FaArrowAltCircleRight size={30} color="white" />
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Slider