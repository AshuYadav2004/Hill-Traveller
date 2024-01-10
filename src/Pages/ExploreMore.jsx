import React from 'react'
import { Banner,MunnarWithUsSection,ItineraryTab,DayItinearies,MakeItinerariesSections,TopPlacesSection,BestForYouSection,HappyCustomerSection,FaqSection,NewsLetter } from '../Component/export'

function ExploreMore() {
    // for banner data
    const Bannerdata = {
        BannerImg:"/Banner-imgs/auli-banner.jpg",
        heading:"Auli",
        para:""
      
      }

      // for top places
      const slidesForTopPlaces = [
        {
          title: 'Auli',
          image: '/utlity-imgs/itineraries-details/Auli.jpg',
          description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
        },
        {
            title: 'Auli',
            image: '/utlity-imgs/itineraries-details/Dhanouti.jpg',
            description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
          },
          {
            title: 'Auli',
            image: '/utlity-imgs/itineraries-details/Nainital.jpg',
            description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
          },
          {
            title: 'Auli',
            image: '/utlity-imgs/itineraries-details/Chaukori.jpg',
            description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
          },
    
    
       
        
      ];

     const TopPlacesSectionData = {
      heading:"Most Visited Destination",
      para:"If we were asked to choose our top places in Himalayan haven in Uttarakhand, we’d go for these."
     }

    // for hotel
    const slidesForHOtel = [
      {
        title: 'Tea Vally Resort',
        image: '/utlity-imgs/itineraries-details/hotel1.jpg',
        description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
      },
      {
          title: 'The panaormic GateWay',
          image: '/utlity-imgs/itineraries-details/hotel2.jpg',
          description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
        },
        {
          title: 'Kidc Tea Country',
          image: '/utlity-imgs/itineraries-details/hotel3.jpg',
          description: "Auli, a Himalayan haven in Uttarakhand, enchants with emerald tea gardens and awe-inspiring panoramas of snow-draped peaks. A picturesque retreat, inviting serenity and embracing nature's timeless beauty.",
        },
    ]

    const hotelSectionData = {
      heading:"Hotels",
      para:"WHERE HERE TO REST YOUR HEAD."
     }


  return (
   <>
   <Banner BannerData={Bannerdata}/>
   <MunnarWithUsSection />
   <ItineraryTab/>
   <DayItinearies/>
   <MakeItinerariesSections/>
   <TopPlacesSection slides={slidesForTopPlaces} sectionData={TopPlacesSectionData}/>
   {/* Rpeating the same comnponet again coz same patter don't mind the name it dose not matter */}
   <TopPlacesSection slides={slidesForHOtel} sectionData={hotelSectionData}/>
   <BestForYouSection/>
   <HappyCustomerSection/>
   <FaqSection/>
   <NewsLetter/>

   </>
  )
}

export default ExploreMore