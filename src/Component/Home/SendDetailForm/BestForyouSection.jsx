import React from 'react';
import './BestForyouSection.css'

const BestForYouSection = () => {
    return (
      <section className="best-for-you">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <div className="best-for-you-heading">
                <div className="heading">
                  <span className="left-align">Reach Us <img className="red_circle" src="/utlity-imgs/circle_red.png" alt="" /></span>
                  <h2>Have a coffee, Let us do the best for you </h2>
                  <p>Unveil the beauty of iconic landmarks, relish gourmet delights, and be pampered with impeccable hospitality. Reserve your passport to unforgettable moments</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="let-us-find-form">
                <div className="form-heading">
                  <h5>Let us Find you the Best Package!</h5>
                </div>
                <form role="form" name="header" id="header">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <input type="text" name="name" placeholder="Name*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <input type="text" name="phone" placeholder="Contact no.*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <input type="email" name="email" placeholder="Email*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2">
                        <select className="form-control choices-two form-select" name="destination">
                          <option selected> Select Destination</option>
                          <option value="Rishikesh">Rishikesh</option>
                          <option value="Haridwar">Haridwar</option>
                          <option value="Chopta">Chopta</option>
                          <option value="Auli">Auli</option>
                          <option value="Nainital">Nainital</option>
                          <option value="Harsil">Harsil</option>
                          <option value="Chaukori">Chaukori</option>
                          <option value="Badrinath">Badrinath</option>
                          <option value="Kedarnath">Kedarnath</option>
                          <option value="Dhanaulti">Dhanaulti</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <input type="text" name="traveldate" placeholder="Travelling Date*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <input type="number" name="noofday" placeholder="No. Of Days*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <div className="d-flex">
                          <div className="number">
                            <div className="guest">
                              <input className="form-control" name="adult" type="number" placeholder="Adult*" />
                            </div>
                          </div>
                          <div className="number">
                            <div className="guest">
                              <input className="form-control" name="child" type="number" placeholder="Child*" />
                            </div>
                          </div>
                          <div className="number">
                            <div className="guest">
                              <input className="form-control" name="infant" type="number" placeholder="Infant*" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <input type="text" name="msg" placeholder="Message*" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-1">
                        <div className="form-btn">
                          <input type="submit" name="mailsent" value="Yes, Send Me the Details! " className="form-submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BestForYouSection;
