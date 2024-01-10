import React from 'react'
import { Banner,ShowAllDestination,BestForYouSection,NewsLetter } from '../Component/export'

function CharDham() {

    // card data to render
    const cardData = [
        {
            name :"kedarnathuuu",
            img : "/utlity-imgs/kedarnath-badrinath.jpg",
            bestTime:"October-December",
            climate :"Tropical",
            language:"Hindi, English, Garhwali",
            cusin :"Spice and Flavorful"
        },
        {
            name :"Badrinath",
            img : "/utlity-imgs/badrinath-kedarnath.jpg",
            bestTime:"October-December",
            climate :"Tropical",
            language:"Hindi, English, Garhwali",
            cusin :"Spice and Flavorful"
        },
        {
            name :"Yamnotri",
            img : "/utlity-imgs/yamnotri-gangotri.jpg",
            bestTime:"October-December",
            climate :"Tropical",
            language:"Hindi, English, Garhwali",
            cusin :"Spice and Flavorful"
        },
        {
            name :"Gangotri",
            img : "/utlity-imgs/gangotri-yamnotri.jpg",
            bestTime:"October-December",
            climate :"Tropical",
            language:"Hindi, English, Garhwali",
            cusin :"Spice and Flavorful"
        },
      
    
    ]

    // banenr data
    const Bannerdata = {
      BannerImg:"/Banner-imgs/chardham-banner.jpg",
      heading:"char Dham",
      para:""
    
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

export default CharDham