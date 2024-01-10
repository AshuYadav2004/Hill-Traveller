import React from 'react'
import './chooseus.css'
import { useMediaQuery } from 'react-responsive';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function WhychooseUsSection() {
    const backgroundIimgurl = 'url(/Banner-imgs/why-choose-us.jpg)'
    const carddata = [{
        title: "Navigating Destination",
        description:"With Years of Travel Know-How, We've Explored Far and Wide. Whether it's the Buzzing Streets of Cities or the Peaceful Getaways, We've Got You Covered",
        frontImg :"/utlity-imgs/destination_knowledge_white.png",
        backImg:"/utility-imgs/why-choose-us.jpg"
    },
    {
        title: `Personalized Experience`,
        description:"Your Journey, Your Way: Our Travel Planners Personalize Every Detail Based on Your Preferences, Interests, and Goals. Because Your Adventure Should Be as Unique as You Are.",
        frontImg :"/utlity-imgs/personalized-Itineraries-white.png",
        backImg:"/utlity-imgs/personalized-Itineraries-dark.png"
    },
    {
        title: `Honesty in Every Step`,
        description:"Your Money's Worth, Plain and Simple: Clear Pricing, No Hidden Fees, Just Honest Value Throughout Your Journey",
        frontImg :"/utlity-imgs/valuet_tansparency_white.png",
        backImg:"/utlity-imgs/valuet_tansparency_dark.png"
    },
    {
        title: `Your Safety Our Priority`,
        description:"Your Safety First: We Choose Reliable Partners and Take Extra Steps to Ensure Your Journey is Safe and Secure.",
        frontImg :"/utlity-imgs/safety_security_white.png",
        backImg:"/utlity-imgs/safety_security_dark.png"
    }]
    const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <section className="choose-Us-wrp" style={{
        backgroundImage:backgroundIimgurl
    }}>
    <div className="container">
      <div className="row">
        <div className="heading">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="col-md-12">
        <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
      <div className="carousel-inner">
                 {
                   carddata.map(( item,index )=>{
                         let classname = index === 0?"carousel-item active":"carousel-item"
                         
                         return(
                            <div className={classname} key={index}>
                            <div className="card-wrapper container-sm d-flex justify-content-around">
                            {carddata.slice(index, index +(isMobile ? 2 : 4)).map((card, cardIndex) => (
            <div className="choose-us-card" key={cardIndex}>
              <div className="card-inner">
                          <div className="card-front">
                           <div className="card-front-content">
                              <img src={card.frontImg} alt="" className='img-fluid front-card-img mt-5'/>
                              <h3 className='mt-3'>{card.title}
                              </h3>
                           </div>
                          </div>
                          <div className="card-back">
                           <div className="back-content">
                              <img src={card.backImg} alt="" />
                              <h3>{card.title}</h3>
                              <p>{card.description}</p>
                           </div>
                          </div>
                        </div>
            </div>
          ))}
                            </div>
                          </div>
                         )
                   })
                  
                 }
      
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <FaArrowLeft className="carousel-icon me-5 " style={{fontSize:"30px"}} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <FaArrowRight className="carousel-icon ms-5" style={{fontSize:"30px"}} />
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
  );
        </div>
      </div>
     
    </div>
  </section>
  )
}

export default WhychooseUsSection