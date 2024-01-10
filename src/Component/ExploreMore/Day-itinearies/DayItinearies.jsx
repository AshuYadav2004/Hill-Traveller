import React from 'react'
import './dayItinearies.css'

function DayItinearies() {
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
      <div className="row align-items-end flex_direction">
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
          <div className="day_itineary_img">
            <img src="/utlity-imgs/itineraries-details/auli1.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-down">
          <div className="day_itineary_parent">
            <div className="heading">
              <h3>Day 01</h3>
            </div>
            <div className="sub_heading">
              <h6>Rishikesh  To Auli </h6>
              <p>Start your Auli adventure with an early morning bus ride for a scenic experience. Alternatively, opt for a direct cab to Auli for personalized comfort. For a balanced approach, take a bus to Joshimath and seamlessly transition to a cab for the final leg of your journey, offering both adventure and convenience.</p>
            </div>
            <div className="day_itineary_pera">
              <p>You can also take small walks around the property. Enjoy the evening with tea followed by dinner. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col-lg-6 col-sm-6" data-aos="fade-down">
          <div className="day_itineary_parent new_parent">
            <div className="heading">
              <h3>Day 02 - 03</h3>
            </div>
            <div className="sub_heading">
              <h6>In Auli </h6>
              <p>Experience Auli's charm with the serene Auli Lake, picturesque Chenab Lake, and the lush meadows of Garson Bugyal. Elevate your adventure with the Char-lift and embrace the thrill of skiing. Auli offers a delightful mix of tranquility and excitement for a unique getaway.</p>
            </div>
            <div className="day_itineary_pera">
              <p>Start your day with a hearty breakfast, gearing up for an exhilarating skiing experience in Auli. Ascend with the cable car, soaking in the mesmerizing Auli scenery. A short walk will lead you to the skiing point, where beginners receive expert guidance on mastering the basics. Today promises a blend of breathtaking landscapes and the thrill of learning a new skill on the snowy slopes of Auli.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
          <div className="day_itineary_img">
            <img src="/utlity-imgs/itineraries-details/auli3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="row align-items-end flex_direction">
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
          <div className="day_itineary_img">
            <img src="/utlity-imgs/itineraries-details/auli2.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-down">
          <div className="day_itineary_parent">
            <div className="heading">
              <h3>Day 04</h3>
            </div>
            <div className="sub_heading">
              <h6>Departure from Auli. </h6>
            </div>
            <div className="day_itineary_pera">
              <p>Begin your day in Auli with a delightful early morning breakfast before embarking on your journey to Rishikesh. Once in Rishikesh, savor a satisfying dinner, immersing yourself in the spiritual vibes of this vibrant town. Conclude your adventure with a night bus ride to Delhi, allowing you to reflect on the memories made during your picturesque retreat in the Himalayas. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DayItinearies