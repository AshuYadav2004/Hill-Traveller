import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';
import './Footer.css'
import logo from "../../assets/images/logo.png/";
const Footer = () => {
  return (
    <>
    <footer className='Footer'>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="footer-data">
              <Link to="/">
                <img src={logo} alt="" width="50%" />
              </Link>
              <p>
                hilltraveller.com is unit of Have a Nice Trip Private Limited
              </p>
              <p>
                CIN No: <strong>U63030UP2021PTC156433</strong> <br />
                GST No: <strong>09AAGCH0749G1ZJ</strong> <br />
                GST No: <strong>AAGCH0749G</strong>
              </p>
            </div>
            <div className="footer-icon">
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="footer-links">
              <h5>Who we are?</h5>
              <ul>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/term-condition">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4">
            <div className="footer-links footer-links-wiht-icons">
              <h5>Reach Us</h5>
              <ul>
                <li>
                  <AiOutlinePhone style={{fontSize:"25px",color:"black"}}/>
                  <a href="tel:01203576847">0120-3576847</a>
                </li>
                <li>
                  <AiOutlineMail style={{fontSize:"20px"}}/>
                  <a href="mailto:info@hilltraveller.com">info@hilltraveller.com</a>
                </li>
                <li>
                  <AiOutlineEnvironment style={{fontSize:"20px"}}/>
                  <a href="#">
                    Add-17-C-318, Ghaziabad, VASUNDHARA, Uttar Pradesh, India,
                    201012
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* <!-- fotter end  --> */}
    <div className="footer-bottom">
  <p>© 2023 hilltraveller All Right Reserved.</p>
</div>


    </>
  
  );
};

export default Footer;
