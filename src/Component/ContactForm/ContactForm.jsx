import React from 'react';
import "./ContactForm.css"
import { FaPhoneVolume, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="contact-us">
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-lg-12">
          <div className="contact_head text-center">
            <div className="heading">
              <h2>
                Connect with us{' '}
                <img className="red_circle" src="img/itineraries-listing/circle_red.png" alt="" />
              </h2>
              <p>If you got any questions please do not hesitate to send us a message</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center flex_direction" data-aos="fade-up">
        <div className="col-lg-6 col-sm-6">
          <div className="contact_address">
            <ul>
              <li>
                <FaPhoneVolume className='wast-icons' /> <h4>  0120-3576847, +91-9579161741{' '}</h4>
              </li>
              <li>
                <FaMapMarkerAlt className='wast-icons' /> <h4> 17-C-318, Ghaziabad, VASUNDHARA, Uttar Pradesh, India, 201012</h4>
              </li>
              <li>
                <FaEnvelope className='wast-icons' /> <h4>contact@hilltravller.com</h4> 
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <form action="" method="post" role="">
            <div className="form_head">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name*" name="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Contact No*" name="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email*" name="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="I am From*" name="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Message*" name="" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="submit" value="Connect with Me!" className="connect_with" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="contact_map" data-aos="zoom-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.801260466703!2d-71.0786931239003!3d42.34676037119413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0d715622b3%3A0x5b2af19970952585!2s132%20Dartmouth%20St%2C%20Boston%2C%20MA%2002116%2C%20USA!5e0!3m2!1sen!2sin!4v1694157317526!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactForm;
