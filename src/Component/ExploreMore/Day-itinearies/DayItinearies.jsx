import React from 'react'
import './dayItinearies.css'

function DayItinearies({itineraries}) {
  console.log("itternaiers",itineraries)
  return (
    <section className="day_itinearies" id="itinearies">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="heading">
            <h2>Day Itineraries <img className="red_circle" src="/utlity-imgs/itineraries-details/circle_red.png" alt="" />
            </h2>
          </div>
        </div>
      </div>
    {itineraries.map((i,index)=>{
      if((index + 1) % 2 === 0){
        return(
          <div className="row align-items-end flex_direction">
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
          <div className="day_itineary_img">
            <img src={i.image} alt={`day${index+1}Image`} />
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-down">
          <div className="day_itineary_parent">
            <div className="heading">
              <h3>{`Day${index+1}`}</h3>
            </div>
            <div className="sub_heading">
              <h6>{i.heading} </h6>
              <div className="day_itineary_pera">
              <p> <p>{i.description}</p></p>
            </div>
            </div>
          </div>
        </div>
      </div>
        )
      }
      else{
        return(
          <div className="row align-items-end">
        <div className="col-lg-6 col-sm-6" data-aos="fade-down">
          <div className="day_itineary_parent new_parent">
            <div className="heading">
              <h3>{`Day${index+1}`}</h3>
            </div>
            <div className="sub_heading">
              <h6>{i.heading} </h6>
            </div>
            <div className="day_itineary_pera">
              <p>{i.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
          <div className="day_itineary_img">
            <img src={i.image} alt={`Day${index+1}`} />
          </div>
        </div>
      </div>
        )
      }
    })}
     
     
    </div>
  </section>
  )
}

export default DayItinearies