import React, { useEffect, useState } from 'react'
import { Banner,Showcard,ShowAllDestination,BestForYouSection,NewsLetter,Loader } from '../Component/export'
import { destination } from '../api/Destination';
import { toast } from 'react-toastify';
function Destination() {
    const [loader,setloader] = useState(false)
      
    const [cardData,setCarddata] = useState([])
    useEffect(()=>{
        ( async ()=>{
            const result = await destination.getAllDestination()
            if(result.status === 200){
              setCarddata(result.data.data)
            }
           else{
             toast.error("erro fetching data")
           }
        })()
    },[])
console.log(cardData)
const Bannerdata = {
  image:"/Banner-imgs/destination-banner.jpg",
  heading:"Making Memories",
  description:"Discovering Places"

}

if(loader){
    return(
        <Loader/>
    )
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