import React from 'react'
import "./ViewAllCards.css"
import { FaEdit, FaTrash } from 'react-icons/fa';


const ViewAllCards = () => {
  return (
    
    <div className="card" style={{ width: '18rem' }}>
    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <div className='btn-covers'>
      <button type="button" class="btn btn-success">Edit <FaEdit/></button>
      
      
      <button type="button" class="btn btn-danger">Delete <FaTrash/></button>
      </div>
     
      
    </div>
  </div>
   
  );
};

export default ViewAllCards;
