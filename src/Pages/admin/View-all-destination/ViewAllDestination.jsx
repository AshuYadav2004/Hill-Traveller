import React from 'react';
import './viewAllDestination.css';
import { ViewAllCards } from '../../export'; 



function ViewAllDestination() {
  return (
   <>
    <div className='cards-covers'>
<ViewAllCards/>
<ViewAllCards/>
<ViewAllCards/>
{/* <Pagination currentPage={}/> */}
    </div>

</>
  )
}

export default ViewAllDestination;
