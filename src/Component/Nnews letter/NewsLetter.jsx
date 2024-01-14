import React, { useState } from 'react'
import './newsletter.css'

function NewsLetter() {

  return (
    <section className="subscribe">
    <div className="container" data-aos="zoom-in">
      <div className="row">
        <div className="col-lg-12">
          <div className="subscribe-heading">
            <div className="newsL-heading">
              <span>
                NEWSLETTERS{' '}
                <img
                  className="red_circle"
                  src="/utlity-imgs/circle_red.png"
                  alt=""
                />
              </span>
              <h2>Subscribe our newsletter</h2>
              <p>Don't miss out on your perfect getaway - book today!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="subscribe-input">
            <input type="email" placeholder="enter your mail*" className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="subscribe-btn">
            <input type="submit" value="Yes, send me good offers!" className="subscribe-submit" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsLetter