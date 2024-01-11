import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png/";
import { FaSearch, FaBars } from 'react-icons/fa';

function Header() {

  let navData = [{
    title:"Destinations",
    link:"/destinations"
  },
  {
    title:"Char Dham",
    link:"/chardham",

  }
  ,
  {
    title:"Blogs",
    link:"/blogs"
  },
  {
    title:"FAQs",
    link:"/faqs"
  },
  {
    title:"Contact",
    link:"/contact"
  }
]

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand d-md-none">
                  <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <Link to="/" className="navbar-brand d-none d-md-block">
                      <img src={logo} alt="" />
                    </Link>
                   
                           {
                            navData.map((item,index)=>{
                               return (
                                <li className="nav-item" key={index}>
                                <Link to={item.link} className="nav-link" aria-current="page">{item.title}</Link>
                              </li>
                               )
                            })
                           }
                    <li className="nav-item nav-item-btn">
                      <a href="tel:+919579161741" className="nav-link contact_no">+91- 9579161741 </a>
                    </li>
                    <li className="nav-item  nav-item-btn">
                      <a href="#" 
                      id='enquiry-btn'
                      className="nav-link enquire" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Enquiry Now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
