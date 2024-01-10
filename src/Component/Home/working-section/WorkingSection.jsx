import React from 'react';
import './WorkingSection.css'

const WorkingSection = () => {
  return (
    <section className="working-we-are" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h2>
                How it works? <img className="red_circle" src="/utlity-imgs/itineraries-listing/circle_red.png" alt="" />
              </h2>
            </div>
          </div>
        </div>
        <div className="works-icon-wrp">
          <div className="works-icon-pera">
            <img src="/utlity-imgs/explor-2.png" alt="" />
            <p>Explore Destinations and Packages</p>
          </div>
          <div className="works-icon-pera">
            <img src="/utlity-imgs/expert.png" alt="" />
            <p>Contact Travel Experts</p>
          </div>
          <div className="works-icon-pera">
            <img src="/utlity-imgs/dream-vacation.png" alt="" />
            <p>Book Your Dream Vacation</p>
          </div>
          <div className="works-icon-pera">
            <img src="/utlity-imgs/done.png" alt="" />
            <p>Receive Confirmation</p>
          </div>
          <div className="works-icon-pera">
            <img src="/utlity-imgs/assistance.png" alt="" />
            <p>Travel Assistance and Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
