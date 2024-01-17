import React from 'react'
import "./HomeBoxes.css"


const cardsData = [
    { price: "5,79,000", title: 'Total Income' },
    { price: "5,79,000", title: 'Total Income' },
    { price: "5,79,000", title: 'Total Income' },
    { price:"5,79,000", title: 'Total Income' },
   
  ];

function HomeBoxes() {
  return (
<>


<div className="col-lg-12">
      <div className="single_element">
        <div className="quick_activity">
          <div className="row">
            <div className="col-12">
              <div className="quick_activity_wrap">
                {
        cardsData.map((e)=>{
            return <div className="single_quick_activity">
    <h4>{e.title}</h4>
    <h3>$ <span className="counter">{e.price}</span> </h3>
    <p>Saved 25%</p>
  </div>
        })
    }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
</>

    
  )
}

export default HomeBoxes;