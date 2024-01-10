import React from 'react'
import './FixBottomNav.css'
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 
// import styled from 'styled-components';



function FixBottomNav() {
    
  return (
    <div className="fix-footer-risponsive">
    <div className="icon-wrp-risponsive" style={{background:"blue"}}>
      <Link to="tel:+919579161741"><FaPhone style={{color:"white"}} size={24} color="black" /></Link>
    </div>
    <div className="icon-wrp-risponsive">
      <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"><FaEnvelope style={{color:"white"}} size={24} color="black" /></Link>
    </div>
    <div className="icon-wrp-risponsive" style={{background:"green"}}>
      <a href="https://api.whatsapp.com/send?l=en&amp;phone=+919582330193&amp;text=Hi.." target="_blank" rel="noopener noreferrer" data-action="share/whatsapp/share">
        <FaWhatsapp style={{color:"white"}} size={24} color="black" />
      </a>
    </div>
  </div>
  )
}

export default FixBottomNav