import React from 'react';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import './makeItneraries.css'

const MakeItinerariesSection = () => {
    
  return (
    <section className="make_itineraries new_itineraries" >
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-11 col-sm-12">
            <div className="row align-items-center">
              <div className="col-lg-5 col-sm-5">
                <div className="make_heading">
                  <h4>Make this destination yours!</h4>
                </div>
                <div className="make_pera">
                  <p>Unveil the beauty of iconic landmarks, relish gourmet delights, and be pampered with impeccable hospitality.</p>
                </div>
              </div>
              <div className="col-lg-7 col-sm-7">
                <div className="call_us_btn">
                  <a href="tel:+919579161741">
                    <FaPhone /> Call Now: +91 95xxxxxxx
                  </a>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" href="#">
                    Enquire Now <FaArrowRight className='make-iterney-enquire-icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeItinerariesSection;
