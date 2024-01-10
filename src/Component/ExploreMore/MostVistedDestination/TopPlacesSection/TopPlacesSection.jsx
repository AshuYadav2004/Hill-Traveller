import React from 'react';
import TopPlacesSlider from '../TopPlacesSlider/TopPlacesSlider'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './TopPlacessection.css'
import { Link } from 'react-router-dom';

const TopPlacesSection = ({slides,sectionData}) => {
    console.log(sectionData)


  return (
    <section className="top_places" id="place-interset">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading">
              <h2>{sectionData.heading} <img className="red_circle" src="/utlity-imgs/itineraries-listing/circle_red.png" alt="" /></h2>
              <p>{sectionData.para}</p>
            </div>
          </div>
        </div>

        <TopPlacesSlider slides={slides} />

        <div className="row">
          <div className="col-lg-12">
            <div className="view-all-btn text-center">
             <Link className='view-all-btn-places' >View All <FaArrowRight/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlacesSection;
