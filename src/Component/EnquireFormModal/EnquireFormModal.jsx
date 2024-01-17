import React, { useState } from 'react';
import "./EnquireFormModal.css"; // Ensure this CSS file exists
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Don't forget to import the styles if using DatePicker


const EnquireFormModal = ({ onClose }) => {


    const [showModal, setShowModal] = useState(true);

   
  const closeModal = () => {
    setShowModal(false);
    onClose();  // Notify the parent component that the modal is closed
  };

    return (
        <>
            {
                showModal && (
                    <div className="modal fade enquire_popup show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" data-aos="zoom-in" style={{ display: 'block', paddingLeft: '0px' }}>
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">ENQUIRE FORM</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        id='full-form-cross'
                                        onClick={closeModal}
                                    > X
                                    </button>

                                </div>
                                <div className="container my_container">
                                    <div className="form-outer">
                                        <form method="post" role="form" name="header" id="header">
                                            <div className="page slide-page">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            <input type="text" name="name" className="form-control" placeholder="Enter First Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            <input type="number" name="phone" className="form-control" placeholder="Enter Your Phone No." required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            <input type="email" name="email" className="form-control" placeholder="Enter Your Email Address" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            {/* The dropdown structure has been truncated due to its complexity. You can continue the pattern as below */}
                                                            <select className="form-control choices-single form-select choices__input" name="destination" required>
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
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            <input id="date" data-provide="datepicker" name="checkindate" className="form-control" placeholder="Enter Your Check In Day*" required />
                                                            <i data-provide="datepicker" className="fa-solid fa-calendar-days"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="field">
                                                            <input id="date2" data-provide="datepicker" name="checkoutdate" type="text" placeholder="Enter Your Check Out Day*" className="form-control" required />
                                                            <i data-provide="datepicker" className="fa-solid fa-calendar-days"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="field">
                                                            <div className="d-flex justify-content-between">
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
                                                        <div className="field">
                                                            <textarea id="story" name="msg" rows="1" className="form-control">Write something here.....</textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="field btns text-center">
                                                            <input className="submit" type="submit" name="mailsent" value="Submit" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default EnquireFormModal;