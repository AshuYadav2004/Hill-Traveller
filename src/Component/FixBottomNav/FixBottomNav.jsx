import React from 'react'
import './FixBottomNav.css'
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
// import styled from 'styled-components';



function FixBottomNav() {
    
  return (
    <div className="fix-footer-risponsive">
    <div className="icon-wrp-risponsive">
      <Link to="tel:+919579161741"><img src="/utlity-imgs/call" alt="" width="41" /><img
        src="/utlity-imgs/call.png" alt="" width="41" /></Link>
    </div>
    <div className="icon-wrp-risponsive">
      <Link to="#" data-bs-toggle="modal" ><img
        src="/utlity-imgs/massage.png" alt="" width="41" /></Link>
    </div>
    <div className="icon-wrp-risponsive">
      <Link to="https://api.whatsapp.com/send?l=en&amp;phone=+919582330193&amp;text=Hi..," target="_blank"><img src="/utlity-imgs/whatsapp_icon.png" alt="" width="41px" /></Link>
    </div>
  </div>
  )
}

export default FixBottomNav