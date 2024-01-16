import React, { useEffect, useState } from 'react'
import './showalldestination.css'
import Showcard from '../Showcard/Showcard'
import { Pagination } from '../../export';


function ShowAllDestination({ cardData }) {


  function customMathFunction(value) {
    if (Number.isInteger(value)) {
      return value;
    } else {
      return Math.ceil(value);
    }
  }

  const [currentItem, setcurrentItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalpages, SetTotalPages] = useState(["1"])

  const getValueFromPaginationBUtton = (e) => {
    setCurrentPage(Number(e.target.innerText))
  }

  useEffect(() => {
    const pagesToset = customMathFunction(cardData.length / 9)
    const numner = Array.from({ length: customMathFunction(pagesToset) }, (_, i) => i + 1)
    console.log(numner)
    SetTotalPages(Array.from({ length: customMathFunction(pagesToset) }, (_, i) => i + 1))

  }, [])


  useEffect(() => {
    const startIndex = (currentPage - 1) * 9;
    const endIndex = Math.min(startIndex + 9, cardData.length);
    setcurrentItem(cardData.slice(startIndex, endIndex));
    console.log("currentItem:", currentItem)
  }, [currentPage, cardData]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalpages.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className='Destination-wrp place'>
      <div className="container cover-of-cards">
        <div className="row">
          <div className="col-lg-12">
            <div className="places-main-wrp">
              <div className="row">
                {currentItem.map((data, index) => {
                  const BestThingArr = [];
                  for (const key in data.bestThings) {
                    if (data.bestThings[key] !== "") {

                      BestThingArr.push(key);
                    }
                  }
                  return (
                    <Showcard coverimg={data.coverImage} besthingArr={BestThingArr} name={data.bannerData.heading} link={data._id} cardData={data} key={index} />
                  )
                })}


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* conditional rendring */}
      {cardData.length >= 10 && (
        <Pagination currentPage={currentPage} totalpages={totalpages} onPageChange={handlePageChange} />
      )}
    </section>
  )
}

export default ShowAllDestination