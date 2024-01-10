import React from 'react';
import './Faqs.css'

const FaqSection = () => {
  const faqItems = [
    {
      id: 1,
      question: 'How do I book travel package on your website?',
      answer: 'Fill enquiry form with your details, our team will connect with you to discuss the itinerary and provide you details about your dream tour package.',
    },
    {
      id: 2,
      question: 'Can I customize a travel package according to my preference?',
      answer: 'Yes, we provide customer’s preference based customized package.',
    },
    {
      id: 3,
      question: 'What payment options do you accept, and is my payment secure?',
      answer: 'We accept online payments in the account of:- Have a Nice Trip Pvt Ltd A/c:- 2302245654799583 IFSC CODE -AUBL0002456',
    },
    {
      id: 4,
      question: 'What is included in your travel packages?',
      answer: 'We provide customized packages, hence inclusions and exclusion are provided on the basis of individual package and as per the requirements of customers well in advance before finalizing the packages.',
    },
  ];

  return (
    <section className="inquirie">
      <div className="container" data-aos="fade-in">
        <div className="row">
          <div className="col-lg-5">
            <div className="inquirie-heading">
              <div className="heading">
                <span className="left-align">FAQs <img className="red_circle" src="/utlity-imgs/itineraries-listing/circle_red.png" alt="" /></span>
                <h2>Popular Inquiries</h2>
              </div>
            </div>
            <div className="view-all-btn">
            <button className="faq-button">
      Apply Now
      <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
        <path
          clipRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="inquirie-list">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {faqItems.map((item) => (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header" id={`panelsStayOpen-heading${item.id}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${item.id}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${item.id}`}>
                        {item.question}
                      </button>
                    </h2>
                    <div id={`panelsStayOpen-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${item.id}`}>
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
