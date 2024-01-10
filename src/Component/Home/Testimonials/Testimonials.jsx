import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonials.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HappyCustomerSlider = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <div className="arrow-prev" onClick={onClick}>
          <FaChevronLeft size={30} color="white" />
        </div>
      );
      
      const CustomNextArrow = ({ onClick }) => (
        <div className="arrow-next" onClick={onClick}>
          <FaChevronRight size={30} color="white" />
        </div>
      );
      
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const customers = [
    {
      name: 'Ankit',
      image: 'utlity-imgs/ankit-testi.jpg',
      testimonial:
        "My pilgrimage to the Char Dham destinations in Uttarakhand was nothing short of a divine experience. The sacred sites of Yamunotri, Gangotri, Kedarnath, and Badrinath left an indelible mark on my soul. The pristine landscapes and the serenity of these holy places provided a perfect backdrop for reflection and prayer.",
    },
    {
        name:'Manoj',
        image:"/utlity-imgs/manoj-testi.jpg",
        testimonial:"Yamunotri, nestled in the lap of the Garhwal Himalayas, captivated me with its natural beauty. The Yamuna River, originating from here, is not just a watercourse but a symbol of purity."
    },
    {
        name:'Badrish',
        image:"/utlity-imgs/badrish.jpg",
        testimonial:"Kedarnath, perched at a breathtaking altitude, is a testament to unwavering faith. The trek to this holy abode is challenging but immensely rewarding. The resonating sound of bells and the mystical atmosphere are etched in my memory."
    }
  ];

  return (
    <Slider {...sliderSettings}>
      {customers.map((customer, index) => (
        <div key={index} className="happy-customer-parent">
          <div className="row">
            <div className="col-lg-5 col-sm-5">
              <div className="happy-customer-video">
                <img src={customer.image} alt={customer.name} />
                {/* Add play icon if needed */}
              </div>
            </div>
            <div className="col-lg-7 col-sm-7">
              <div className="happy-customer-info">
                <h4>{customer.name}</h4>
                <p>{customer.testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const HappyCustomerSection = () => {
  return (
    <section className="happy-customer">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="happy-customer-heading">
              <div className="testi-heading">
                <span>
                  TESTIMONIALS <img className="red_circle" src="utlity-imgs/itineraries-listing/circle_red.png" alt="" />
                </span>
                <h2>Meet our happy customers</h2>
                <p>Unveil the beauty of iconic landmarks, relish gourmet delights, and be pampered with impeccable hospitality. Reserve your passport to unforgettable moments</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="happy-customer-slider-wrp">
              <div className="happy-customer-slider owl-carousel owl-theme">
                <HappyCustomerSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomerSection;
