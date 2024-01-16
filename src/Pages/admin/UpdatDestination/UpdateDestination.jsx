import React, { useEffect, useState,useRef } from 'react'
import '../Add destination/AddDestination.css'
import "./UpdateDestination.css"
import { Link, useParams } from 'react-router-dom'
import { destination } from '../../../api/Destination';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../../../Component/export';
import { set } from 'date-fns';
import { render } from 'react-dom';

function UpdateDestination() {
    const [formData, setFormData] = useState([])
    const id =  useParams()
    useEffect(()=>{
        (async ()=>{
          const result = await destination.getDestination(id.id);
          if(result.status === 200){
            setFormData(result.data.data)
          }
         else{
           toast.error("erro fetching data")
         }
        })()
      },[id.id])
      useEffect(() => {
        // Code to execute after exploreData has been updated
        // console.log('Destination:', formData[0] || formData);
        SetBannerData({...formData[0]?.bannerData} || {});
        SetCatagory(formData[0]?.catagory || "");
        SetWhySectionData({...formData[0]?.otherSectionData} || {});
        setBestThings({...formData[0]?.bestThings} || {});
        SetContectSction({...formData[0]?.ContactSection } || {});
        setnumarr(formData[0]?.itineraries || [ ]);
        // for day itneraries
        const NewDayItnariers = {}
      formData[0]?.itineraries.map((i,index)=>{
        NewDayItnariers[`Day${index+1}`] = i
      })

      setDayItinearies(NewDayItnariers);
      // setttingallimages
      setCoverImg(formData[0]?.coverImage || null);
      SetBannerImg(formData[0]?.bannerData.image || null);
      setWhySectionImg(formData[0]?.otherSectionData.image || null);
      setContactSectionImg(formData[0]?.ContactSection
        .image || null);



}, [formData]);


  //  for image setting
  const [CoverImg,setCoverImg] = useState(null);
  const [BannerImg,SetBannerImg] = useState(null);
  const [WhySectionImg,setWhySectionImg] = useState(null);
  const [ContactSectionImg,setContactSectionImg] = useState(null);

    // for checking 
   const [InputNum,setInputNum] = useState(0);
  //  inputt data start
    const [Images,SetImages] = useState([]);
    const [catagory,SetCatagory] = useState("");
    // console.log('catagory',catagory)
    const [Bannerdata,SetBannerData] = useState({
         heading:"" ,
         description:""
    })
    // console.log("Bannerdata",Bannerdata)
    const [Whysectiondata, SetWhySectionData] = useState({
        heading:"",
       description:""
    })
    console.log("whysection",Whysectiondata)
    const [BestTings, setBestThings] = useState({

    })
    console.log("besthitngs",BestTings)
    const [DayItinearies, setDayItinearies] = useState({})
    const [ContactSection , SetContectSction] = useState({
        heading:"",
        description:""
    })
// console.log('contactSection',ContactSection)
    console.log(ContactSection)

    const GetImageData = (e)=>{
       //  fo file preview
    const file = e.target.files[0];
    const fileName = e.target.name
    console.log("filename:",fileName)
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
         if( fileName === 'BannerImg'){
          SetBannerImg(reader.result)
          Bannerdata.image = false
         }
        if(fileName === "CoverImg"){
          setCoverImg(reader.result)
          console.log("bannerimmg:",BannerImg)

        
        }
          if(fileName === 'WhySectionImg'){
            setWhySectionImg(reader.result)
            Whysectiondata.image = false
          }
          if(fileName === 'ContactImg'){
            setContactSectionImg(reader.result)
            ContactSection.image = false
          }
        };
        // for setting the image in array
        const imagedat = {
          name:e.target.name,
          File:e.target.files[0]
        }
      if(file){
        SetImages((prev)=>{
          return(
              [...prev,imagedat]
          )
           })
      }
        reader.readAsDataURL(file);
      }
        
   

    }
  // for dayitneries
  const GetImageDataForDayItineraries = (e)=>{
    //  fo file preview
 const file = e.target.files[0];
 const fileName = e.target.name;
 const actuname = fileName.slice(0,4)
 console.log("filename:",actuname)
   if (file) {
     const reader = new FileReader();

     reader.onloadend = () => {
      setDayItinearies((prevObject) => ({
        ...prevObject,
       [actuname] : {
          heading:DayItinearies[actuname]?.heading || "",
          description:DayItinearies[actuname]?.description || "",
          image:reader.result
        },
      }));
     };
     // for setting the image in array
     const imagedat = {
       name:e.target.name,
       File:e.target.files[0]
     }
   if(file){
     SetImages((prev)=>{
       return(
           [...prev,imagedat]
       )
        })
   }
     reader.readAsDataURL(file);
   }
     


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

    
      const [updateheading, setUpdateheading] = useState('');
      const [updateDescription, setUpdateDescription] = useState('');
    
      const handleDayItineariesHeading = (e) => {
        setDayItinearies((prevObject) => ({
          ...prevObject,
          [e.target.name]: {
            heading:e.target.value,
            description:DayItinearies[e.target.name]?.description || "",
            image:DayItinearies[e.target.name]?.image || null 
          },
        }));
      };
      const handleDayItineariesDescription = (e) => {
        setDayItinearies((prevObject) => ({
          ...prevObject,
          [e.target.name]: {
            heading:DayItinearies[e.target.name]?.heading || "",
            description:e.target.value,
            image:DayItinearies[e.target.name]?.image || null 
          },
        }));
      };
       
      // console.log("DayItinearies",DayItinearies)

   
   const caategory = ["kfdlfjldkf","fjdljfskld","dfjll"];
    const bestThings = ["BestTime","Climate","Cuisine","Langauge","Geography","Population"]

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
    CoverImg:CoverImg?.length > 200?false:CoverImg,
    catagory,
    Bannerdata,
    Whysectiondata,
    BestTings,
    DayItinearies,
    ContactSection,

   }
  
   const [loader,SetLoader] = useState(false)
   const SubmitForm = async (e)=>{
    e.preventDefault()
    SetLoader(true);
    console.log("Data",data);
    console.warn("images",Images)

    const result = await destination.UpdateDestination(Images,data,id.id);

    if(!result){
      SetLoader(false);
      toast.error("something went wrong")
    }
    if(result.status === 200){
          SetLoader(false);
          toast.success(result.data.message);
         
    }
    else{
      SetLoader(false)
      toast.error(result.data.message);
    }
    
    

    
  }
 

  return (
    <div className='papa'>

    <div className="container">  
    <form id="contact"  >
          <h2>{`Update Destination`}</h2>
        
        <div className='edit-img-cover'>
          <img src={CoverImg} alt="img" />
        </div>
     <fieldset>
       


        <div className="file-input">
  <input
    type="file"
    name="CoverImg"
    id="CoverImg"
    onChange={GetImageData}
    className="file-input__input"
  />
  <label className="file-input__label" htmlFor="CoverImg">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="upload"
      className="svg-inline--fa fa-upload fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
    <span>Edit Cover Image</span>
  </label>
</div>



      </fieldset>
      <fieldset>
      <label>caategory:</label>
  <select id="destination-catagory" name="destination-catagory" onChange={(e)=>{
     SetCatagory( e.target.value)
  }} value={catagory}>
     {caategory.map((i,index)=>{
      return(
        <option value={i} key={index}>{i}</option>
      )
     })}
  </select>
      </fieldset>
      <h3>Banner section</h3>
      <div className='edit-img-cover'>
          <img src={BannerImg} alt="img" />
        </div>
      <fieldset>
        
        <div className="file-input">
        <input placeholder="Cover image" type="file"  name='BannerImg' required autoFocus id="BannerImg"  className="file-input__input" onChange={GetImageData}/>
  <label className="file-input__label" htmlFor="BannerImg">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="upload"
      className="svg-inline--fa fa-upload fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
    <span>Edit Banner Image</span>
  </label>
</div>
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
        <div className='edit-img-cover'>
          <img src={WhySectionImg} alt="img" />
        </div>
        <fieldset>
        
        <div className="file-input">
  <input
    type="file"
    name="WhySectionImg"
    id="WhySectionImg"
    onChange={GetImageData}
    className="file-input__input"
  />
  <label className="file-input__label" htmlFor="WhySectionImg">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="upload"
      className="svg-inline--fa fa-upload fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
    <span>Edit otherSection Image</span>
  </label>
</div>
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
                bestThings.map((i,index)=>{
                  return(
                    <fieldset key={index}>
                    <input placeholder={i} type="text" name={i} required autoFocus onChange={GetBestThings} value={BestTings[i]} />
                  </fieldset>
                  )
                })
            }
        </div>
        <h3>Day Itineraries </h3>
        <div className="day-packages">
            {numarr.map((i,index)=>{
            return(
            <div className="day-itnrey-row" key={index}>
                  <h3>{`Day${index+1}`}</h3>
                <fieldset>
                <div className='edit-img-cover'>
          <img src={DayItinearies[`Day${index+1}`].image } alt="img" />
        </div>
        <div className="file-input">
  <input
    type="file"
    name={`Day${index+1}Img`}
    id={`Day${index+1}Img`}
    onChange={GetImageDataForDayItineraries}
    className="file-input__input"
  />
  <label className="file-input__label" htmlFor={`Day${index+1}Img`}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="upload"
      className="svg-inline--fa fa-upload fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
    <span>{`Edit Day${index+1} image`}</span>
  </label>
</div>
                 </fieldset>
                 <fieldset>
      <input placeholder={`Day${index+1}heading`} name={`Day${index+1}`} type='text' required onChange={(e)=>{
         handleDayItineariesHeading(e)
       
      }} value={DayItinearies[`Day${index+1}`].heading} ></input>
      </fieldset>
                 <fieldset>
      <textarea placeholder={`Day${index+1}Description`} name={`Day${index+1}`} required onChange={handleDayItineariesDescription}
 value={DayItinearies[`Day${index+1}`].description}></textarea>
      </fieldset>
            </div>
                
            )
            })}
        </div>
        <h3>Contact section</h3>
        <div className='edit-img-cover'>
          <img src={ContactSectionImg} alt="img" />
        </div>
        <fieldset>
        
        <div className="file-input">
  <input
    type="file"
    name="ContactImg"
    id="ContactImg"
    onChange={GetImageData}
    className="file-input__input"
  />
  <label className="file-input__label" htmlFor="ContactImg">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="upload"
      className="svg-inline--fa fa-upload fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
      ></path>
    </svg>
    <span>Edit Cover Image</span>
  </label>
</div>
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
        <button name="submit" type="submit" id="contact-submit" onClick={SubmitForm}>{loader?(<Loader/>):"Submit"}</button>
      </fieldset>

    </form>
  </div>
  </div>
  )
}

export default UpdateDestination