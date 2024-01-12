import React, { useEffect, useState } from 'react'
import './showalldestination.css'
import Showcard from '../Showcard/Showcard'


function ShowAllDestination({ cardData}) {
   

    function customMathFunction(value) {
        if (Number.isInteger(value)) {
          return value;
        } else {
          return Math.ceil(value);
        }
      }

    const [currentItem,setcurrentItem] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalpages,SetTotalPages] = useState(["1"])

    const getValueFromPaginationBUtton = (e)=>{
            setCurrentPage( Number(e.target.innerText))
    }

    useEffect(()=>{
        const pagesToset = customMathFunction(cardData.length/9)
        const numner = Array.from({length:customMathFunction(pagesToset)},(_,i)=>i+1)
        console.log(numner)
        SetTotalPages(Array.from({length:customMathFunction(pagesToset)},(_,i)=>i+1))

    },[])


    useEffect(() => {
        const startIndex = (currentPage - 1) * 9;
        const endIndex = Math.min(startIndex + 9, cardData.length);
        setcurrentItem(cardData.slice(startIndex, endIndex));
        console.log("currentItem:",currentItem)
      }, [currentPage,cardData]);
      
  return (
   <section className='Destination-wrp place'>
     <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="places-main-wrp">
               <div className="row">
                {currentItem.map((data,index)=>{
                   const BestThingArr = [];
                   for (const key in data.bestThings) {
                     if (data.bestThings[key] !== "") {
                       
                       BestThingArr.push(key);
                     }
                   }
                return(
                    <Showcard coverimg={data.coverImage} besthingArr={BestThingArr} name={data.bannerData.heading} link={data._id} cardData={data} key={index}/>
                )
                })}
              

               </div>
                </div>
            </div>
        </div>
     </div>
     {/* conditional rendring */}
   {cardData.length<10?null:(  <nav aria-label="Page navigation example Page-navigation">
      <ul className="pagination">
        <li className="page-item" onClick={()=>{
            if(currentPage!=1){
                setCurrentPage(currentPage-1)
            }

        }}>
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
      
       {totalpages.map((item,index)=>{
          return(
            <li className="page-item" key={index} onClick={getValueFromPaginationBUtton}><a className="page-link" >{item}</a></li>
          )
       })}
        <li className="page-item">
          <a className="page-link" aria-label="Next" onClick={()=>{
            if(currentPage!=totalpages[totalpages.length-1]){
                setCurrentPage(currentPage+1)
            }
          }}>
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>)}
   </section>
  )
}

export default ShowAllDestination