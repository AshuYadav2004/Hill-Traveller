import React from 'react';
import './ItineraryTab.css'
const ItineraryTab = () => {
    const lidata = [{
        name:"Itineraries",
        id:"#itinearies"
    },{
        name:"Places of Interest",
        id: "#placesofinterest"
    },{
        name:'Hotels',
        id: '#hotels'
    },{
        name:'What our clients say',
        id:"#clients"
    },
      {
        name:"faq",
        id:"#"
      },
      {
        name:"Blog",
        id:"#"
      }
    ]

    // for scrooling effect
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <section className="itinerery_tab" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          <div className="itineary_tab">
            <ul>
              {lidata.map((item,index)=>{
                 return(
                    <li key={index}><a className={`${index ===0?'active':" "}`}  onClick={() => handleScroll(item.id)} >{item.name}</a></li>
                 )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryTab;
