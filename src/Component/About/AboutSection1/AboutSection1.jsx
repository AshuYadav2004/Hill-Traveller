import React from 'react'
import './AboutSection1.css'



const AboutSection1 = () => {
  return (
    <section className="main_about" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_img">
              <img src="/utlity-imgs/black_bg_banner.jpg" alt="" />
            </div>
            <div className="main_about_pera">
              <p>
                Hilltraveller one of the Best Uttarakhand Tour Packages is an Indian best Sikkim travel company located in
                Uttarakhand, India. We are a business focused on offering (Best Uttarakhand Tour Packages) to people the
                options they want when it comes to exploring the world and enjoying everything that our planet has to
                offer. No matter if you want a short trip or a fully-fledged adventure that spans over multiple weeks,
                our team will be able to assist.
              </p>
              <p>
                We can work with any customer that wants to enjoy a fun, relaxing time during his travels. We can easily
                customize the best travel packages based on your needs, requirements, and budget. Hilltraveller Holidays
                understand that every holiday is different and every person has different needs. That’s why our team is
                always committed to providing quality and value at all times.
              </p>
            </div>
            <div className="connect_with_us">
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" href="#">
                Connect with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
