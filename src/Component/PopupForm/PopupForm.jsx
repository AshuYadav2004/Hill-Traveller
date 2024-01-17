import React from 'react'
import "./PopupForm.css"


function PopupForm() {

    function closePopup(event) {
        event.preventDefault(); 
        const popup = document.querySelector('.bts-popup');
        popup.classList.remove('is-visible'); 
    }
    return (
        <div className="bts-popup is-visible"  role="alert">
        <div className="bts-popup-container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-6">
                    <img src="/utlity-imgs/popup-banner.jpg" alt="Popup Banner" />
                </div>
    
                <div className="col-lg-6">
                    <div className="form-container">
                        <form  method="post" role="form" name="header" id="header">
                            <h3>Enquire Now</h3>
    
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" name="name" className="form-control" placeholder="Enter First Name" required />
                                </div>
                                <div className="col-lg-6">
                                    <input type="number" name="phone" className="form-control" placeholder="Enter Your Phone No." required />
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Your Email Address" required />
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-control choices-single form-select" name="destination" required>
                                        <option value="" disabled selected>Select Destination</option>
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
    
                            <div className="row">
                                <div className="col-lg-6">
                                    <input id="date" data-provide="datepicker" name="checkindate" className="form-control" placeholder="Enter Your Check In Day*" required />
                                </div>
                                <div className="col-lg-6">
                                    <input id="date2" data-provide="datepicker" name="checkoutdate" type="text" placeholder="Enter Your Check Out Day*" className="form-control" required />
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-lg-4">
                                    <input className="form-control" name="adult" type="number" placeholder="Adult*" />
                                </div>
                                <div className="col-lg-4">
                                    <input className="form-control" name="child" type="number" placeholder="Child*" />
                                </div>
                                <div className="col-lg-4">
                                    <input className="form-control" name="infant" type="number" placeholder="Infant*" />
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-lg-12">
                                    <textarea id="story" name="msg" rows="1" className="form-control">Write something here.....</textarea>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-lg-12">
                                    <input className="submit" type="submit" name="mailsent" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button id='cross-popup'  onClick={closePopup}>X</button>

        </div>
    </div>
    
    );
}

export default PopupForm;