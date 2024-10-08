import React from 'react';
import { HOC } from '../HOC/HOC';

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-md-6 col-lg-7">
            <div className="contact-info">
              <h3>Contact Us</h3>
             
              <ul className="contact-list">
                <li><i className="fas fa-envelope"></i> <a href="mailto:phonenumber.location@gmail.com">phonenumber.location@gmail.com</a></li>
                <li><i className="fas fa-phone fa-flip-horizontal"></i><a href="tel: (+1 216-325-9748)"> (+1 216-325-9748)</a></li>
                <li><i className="fas fa-map-marker-alt"></i> 647, Glenwood Avenue, Cleveland, Ohio 44115, United States</li>
              </ul>
              <div className="circular-icons social-links">
                <ul>
                  <li><a ><i className="fab fa-facebook-f"></i></a></li>
                  <li><a ><i className="fab fa-twitter"></i></a></li>
                  <li><a ><i className="fab fa-pinterest-p"></i></a></li>
                  <li><a ><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <form className="contact-form">
              <h3>Get in touch</h3>
              <p>Feel free to drop us a message</p>

              <input type="text" className="form-control" placeholder="Your Name" required />
              <input type="email" className="form-control" placeholder="Your Email" required />
              <textarea rows="7" className="form-control" placeholder="Type your message here" required></textarea>

              <button type="submit" className="btn btn-solid">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HOC(ContactUs);
