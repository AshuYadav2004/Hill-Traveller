import React from 'react';
import './MunnarWithUsSection.css';
import { useState } from 'react';

const MunnarWithUsSection = ({data}) => {

  let content = data?.description || []
    
    const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <section className="munnar_us">
      <div className="container">
        <div className="row flex_direction">
          <div className="col-lg-5">
            <div className="munnar_img_wrp">
              <div className="munnar_img">
                <img src={data.image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="why_munnar_parent">
              <div className="why_munnar_wrp">
                <div className="heading">
                  <h2>{data.heading}</h2>
                </div>
              </div>
              <div className={`article why_munnar_pera r ${showFullContent ? 'expanded' : ''} `}>
                <p>
                {showFullContent ? content : `${content.slice(0, 300)}...`}
                </p>
              </div>
              <button onClick={toggleContent} className="moreless-button">
          Read More
        </button>
              <div className="why_munnar_flex">
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/best_time_visit.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Best Time</p>
                  </div>
                </div>
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/climate.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Climate</p>
                  </div>
                </div>
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/cuisine.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Cuisine</p>
                  </div>
                </div>
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/language.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Langauge</p>
                  </div>
                </div>
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/geography.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Geography</p>
                  </div>
                </div>
                <div className="munnar_child">
                  <div className="munnar_icon">
                    <img src="/utlity-imgs/itineraries-details/population.png" alt="" />
                  </div>
                  <div className="munnar_bottom_text">
                    <p>Population</p>
                  </div>
                </div>
              </div>
              <div className="enquiry_btn-now">
                <button className="munnar-enquire-btn">
                  Enquire Now
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MunnarWithUsSection;
