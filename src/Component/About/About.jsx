import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link
import { HOC } from '../HOC/HOC';

function About() {
  return (
    <>
      <div className="container mt-5 mb-5">
        {/* Breadcrumb navigation */}
        <div className="row justify-content-center">
          {/* Main content section */}
          <div className="col-lg-8 col-md-10">
            <div className="d-flex align-items-center mb-4 fw-bold p-3" style={{ backgroundColor: '#f8f9fa' }}>
              <Link to="/" className="text-muted me-2">Home</Link>
              <i className="fa-solid fa-chevron-right me-2"></i>
              <span className="Textcolor">Abouts</span>
            </div>
            <h4 className="mt-4">About Us</h4>
            <section className="mb-5 d-flex flex-column gap-3">
              <p>
                Drink to Infoihub, your trusted destination for all effects of rearmost Blogs. At Infoihub, we understand the significance of securing your data and We should give You rearmost Knowledge. With our comprehensive range of insurance results, we strive to give you with the protection you need at competitive rates.
              </p>
              <p>
                Drink to Infoihub, your trusted destination for all effects of rearmost Blogs. At Infoihub, we understand the significance of securing your data and We should give You rearmost Knowledge. With our comprehensive range of insurance results, we strive to give you with the protection you need at competitive rates.
              </p>
              <p>
                Infoihub.com stands as the premier online destination for timely updates across colorful diligence including communication, real estate, finance, trip, information technology, motorcars, health, and sports.
              </p>
              <p>
                Our devoted platoon constantly refreshes content to insure druggies stay abreast of real- time request trends. Comprised of a different group of individualities ranging from makers and tech suckers to comers and seasoned bloggers, we're passionate about what we do.
              </p>
              <p>
                Our platform is accessible across all bias- mobile, desktop, iPad, and tablet- fully free of charge. Our charge is to expand our reach, attracting a larger followership and delivering material information to the right individualities.
              </p>
            </section>


            <h4 className="mt-4">Our Mission</h4>
            <section className="d-flex flex-column gap-3">
              <p>
                At Infoihub, our charge is Reach a Knowledge about health, wealth, technology to right person at single runner. We believe in empowering our guests with knowledge and immolation substantiated insurance options acclimatized to their unique requirements. We always ready to challange with druggies for give Knowledge by Writing Blogs.
              </p>
              <p>
                Upon Visit or exercising the Website, you're automatically agreeing to the following terms. It's explosively advised that you completely read and understand these terms previous to using the Website. Unauthorized copying, revision of the Website, any part of the Website, or our trademarks is rigorously banned. Any attempts to prize the source law of the Website, restate the Website into other languages, or produce secondary performances are n't permitted. All trademarks, imprints, database rights, and other intellectual property rights related to the Website remain the property of the Service Provider.
              </p>
            </section>

            <h4 className="mt-4">Why Choose Infoihub?</h4>
            <section className="d-flex flex-column gap-3">
              <p>
                moxie With times of experience in the Blogging assiduity, we've the moxie to guide you through the complications of the rearmost themes in World.
              </p>
            </section>


            <h4 className="mt-4">communicate Us</h4>
            <section className="d-flex flex-column gap-3">
              <p>
                still, please do n't vacillate to communicate the Service Provider at phonenumber, If you have any questions or suggestions about the Terms and Conditions phonenumber.location@gmail.com
              </p>
            </section>
          </div>
        </div>

      </div>
    </>
  );
}

export default HOC(About);
