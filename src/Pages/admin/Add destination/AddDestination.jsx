import React, { useEffect, useState } from 'react'
import './AddDestination.css'
import { Link } from 'react-router-dom'
import { destination } from '../../../api/Destination';

function AddDestination() {

    // for checking 
   const [InputNum,setInputNum] = useState(0);
    const [Images,SetImages] = useState([]);
    const [catagory,SetCatagory] = useState('');
    const [Bannerdata,SetBannerData] = useState({
        heading:"",
        description:""
    })
    const [Whysectiondata, SetWhySectionData] = useState({
        heading:"",
        description:""
    })
    
    const [BestTings, setBestThings] = useState({

    })
    const [DayItinearies, setDayItinearies] = useState({})
    const [ContactSection , SetContectSction] = useState({
        heading:"",
        description:""
    })

    console.log(ContactSection)

    const GetImageData = (e)=>{
          const imagedat = {
            name:e.target.name,
            File:e.target.files[0]
          }
          SetImages((prev)=>{
         return(
             [...prev,imagedat]
         )
          })
    }

    const GetBestThings = (e)=>{
          setBestThings((prev)=>{
            return(
                {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            )
          })
    }
    
    const generateObject = (num) => {
        const newObject = {};
        for (let i = 1; i <= num; i++) {
          newObject[`Day${i}`] = {
            heading: '',
            description: '',
          };
        }
        return newObject;
      };

    ;
      const [updateheading, setUpdateheading] = useState('');
      const [updateDescription, setUpdateDescription] = useState('');
    
      const handleDayItinearies = (e) => {
        setDayItinearies((prevObject) => ({
          ...prevObject,
          [e.target.name]: {
            heading:updateheading,
            description:updateDescription
          },
        }));
      };
       
      console.log(DayItinearies)

   
   const caategory = ["kfdlfjldkf","fjdljfskld","dfjll"];
    const bestThings = ["Best Time","Climate","Cuisine","Langauge","Geography","Population"]

    // for array generate
    const [numarr,setnumarr] = useState([])
    const generateNumbers = (num) => {
        const numbers = Array.from({ length: num}, (_, index) => index + 1);
        setnumarr([...numbers])
      };
    //   fo day adding
   const adddays = ()=>{
   generateNumbers(InputNum)
   const newobj = generateObject(InputNum)
   setDayItinearies(newobj)
   }

   const data = {
    catagory,
    Bannerdata,
    Whysectiondata,
    BestTings,
    DayItinearies,
    ContactSection,

   }
   const SubmitForm = async (e)=>{
    e.preventDefault()
    console.log(data)
  
    // const formData = new FormData();

    // Images.forEach((i)=>{
    //   formData.append(i.name,i.File,i.name)
    // })

    const result = await destination.AddDestination(Images,data)
    console.log(result)

    



     
    
      
   }
 

  return (
    <div className='papa'>

    <div className="container">  
    <form id="contact">
          <h2>Add Destination</h2>
        
     <fieldset>
        <label className='mx-2'>Cover image</label>
        <input placeholder="Cover image" type="file" name='CoverImg' required autoFocus onChange={GetImageData}/>
      </fieldset>
      <fieldset>
      <label>caategory:</label>
  <select id="destination-catagory" name="destination-catagory" onChange={(e)=>{
     SetCatagory( e.target.value)
  }}>
     {caategory.map((i,index)=>{
      return(
        <option value={i} key={index}>{i}</option>
      )
     })}
  </select>
      </fieldset>
      <h3>Banner section</h3>
      <fieldset>
        <label className='mx-2'>Banner image</label>
        <input placeholder="Cover image" type="file" name='BannerImg' required autoFocus onChange={GetImageData}/>
      </fieldset>
     
      <fieldset>
        <input placeholder="Banner heding" type="text"  required autoFocus onChange={(e)=>{
                SetBannerData((prev)=>{
               return(
                
                {
                    ...prev,
                    heading:e.target.value
                }
                
               )
               
                })
        }} value={Bannerdata.heading}/>
      </fieldset>
      <fieldset>
        <input placeholder="Banner description" type="text" onChange={(e)=>{
                SetBannerData((prev)=>{
               return(
                
                {
                    ...prev,
                      description:e.target.value
                }
                
               )
               
                })
        }} value={Bannerdata.description} required />
      </fieldset>
      <fieldset>
        {/* why section */}
        <h3>Why section</h3>
        <fieldset>
        <label className='mx-2'>why section image</label>
        <input placeholder="why image" type="file" name='WhySectionImg' required autoFocus onChange={GetImageData}/>
      </fieldset>
        <input placeholder="why section heading" type="text" onChange={(e)=>{
                SetWhySectionData((prev)=>{
               return(
                
                {
                    ...prev,
                      heading:e.target.value
                }
                
               )
               
                })
        }} required value={Whysectiondata.heading} />
      </fieldset>
      <fieldset>
      <textarea placeholder="description...."  onChange={(e)=>{
                SetWhySectionData((prev)=>{
               return(
                
                {
                    ...prev,
                      description:e.target.value
                }
                
               )
               
                })
        }} value={Whysectiondata.description} required></textarea>
      </fieldset>
      <h3>Best things</h3>
        <div id="bestthings">
            {
                bestThings.map((i)=>{
                  return(
                    <fieldset>
                    <input placeholder={i} type="text" name={i} required autoFocus onChange={GetBestThings} value={BestTings.i} />
                  </fieldset>
                  )
                })
            }
        </div>
        <h3>Day Itineraries </h3>
        <fieldset>
          <input type="number" placeholder='type the number of days' id='how-manydays' onChange={(e)=>{
            setInputNum(e.target.value)
          }}/>
          <button onClick={adddays} className='Add-day-btn'>Add Days</button>
        </fieldset>
        <div className="day-packages">
            {numarr.map((i,index)=>{
            return(
            <div className="day-itnrey-row" key={index}>
                  <h3>{`Day${i}`}</h3>
                <fieldset>
        <label className='mx-2'>{`Day${i}image`}</label>
        <input  type="file" name={`Day${i}Img`} required autoFocus onChange={GetImageData}/>
                 </fieldset>
                 <fieldset>
      <input placeholder={`Day${i}heading`} name={`Day${i}`} type='text' required onChange={(e)=>{
        setUpdateheading(e.target.value, handleDayItinearies(e))
       
      }} ></input>
      </fieldset>
                 <fieldset>
      <textarea placeholder={`Day${i}Description`} name={`Day${i}`} required onChange={(e)=>{
        setUpdateDescription(e.target.value, handleDayItinearies(e))
       
      }}></textarea>
      </fieldset>
            </div>
                
            )
            })}
        </div>
        <h3>Contact section</h3>
        <fieldset>
        <label className='mx-2'>BackGround image </label>
        <input placeholder="" type="file" name='ContactImg' required autoFocus onChange={GetImageData}/>
      </fieldset>
      <fieldset>
        <input placeholder="contact heding" type="text"  required autoFocus onChange={(e)=>{
                SetContectSction((prev)=>{
               return(
                
                {
                    ...prev,
                    heading:e.target.value
                }
                
               )
               
                })
        }} value={ContactSection.heading}/>
      </fieldset>
      <fieldset>
      <textarea placeholder="description for contact...."  onChange={(e)=>{
                SetContectSction((prev)=>{
               return(
                
                {
                    ...prev,
                      description:e.target.value
                }
                
               )
               
                })
        }} value={ContactSection.description} required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" onClick={SubmitForm}>Submit</button>
      </fieldset>

    </form>
  </div>
  </div>
  )
}

export default AddDestination