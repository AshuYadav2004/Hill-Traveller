import React from 'react'
import { Banner,Showcard,ShowAllDestination,BestForYouSection,NewsLetter } from '../Component/export'

function Destination() {
  const cardData = [
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
    {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },
      {
        name :"kedarnath",
        img : "/utlity-imgs/Kedarnath.jpg",
        bestTime:"October-December",
        climate :"Tropical",
        language:"Hindi, English, Garhwali",
        cusin :"Spice and Flavorful"
    },

]
const Bannerdata = {
  BannerImg:"/Banner-imgs/destination-banner.jpg",
  heading:"Making Memories",
  para:"Discovering Places"

}

  return (
   <>
   <Banner BannerData={Bannerdata}/>
  <ShowAllDestination cardData={cardData}/>
  <BestForYouSection/>
  <NewsLetter/>
   </>
  )
}

export default Destination