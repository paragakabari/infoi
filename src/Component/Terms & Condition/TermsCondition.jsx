import React from 'react';
import { HOC } from '../HOC/HOC';
import { Link } from 'react-router-dom';
import post4 from '../../assets/images/New folder/thumb/digitaltransformation.png';
import post3 from '../../assets/images/New folder/thumb/globalcommunicationsolution.png';

function TermsCondition() {
  return (
    <div className="container mt-5 mb-5">
      {/* Breadcrumb navigation */}
      <div className="row justify-content-center">
        {/* Main content section */}
        <div className="d-flex align-items-center mb-4 fw-bold p-3" style={{ backgroundColor: '#f8f9fa' }}>
          <Link to={"/"} className="text-muted me-2">Home</Link>
          <i className="fa-solid fa-chevron-right me-2"></i>
          <span className="Textcolor">Terms & Condition</span>
        </div>
        <div className="col-lg-8 col-md-10">
          <h4 className="mb-4">Terms & Conditions for infoihub.com</h4>

          <section className="mb-4">
            <h4>1. Introduction</h4>
            <p>
              Welcome to infoihub.com! These Terms and Conditions apply to the www.infoihub.com app (hereby referred to as "Website") for mobile and desktop that was created by infoihub (hereby referred to as "Service Provider") as a free service.
              By visiting or using the Website, you automatically agree to these terms. It is strongly advised that you read and understand these terms before using the Website.
            </p>
            <p>
              Unauthorized copying, modification of the Website, any part of the Website, or our trademarks is strictly prohibited. Any attempts to reverse engineer the Website, translate the Website into other languages, or create derivative works are not permitted. All trademarks, logos, database rights, and other intellectual property rights related to the Website remain the property of the Service Provider.
            </p>
          </section>

          <section className="mb-4">
            <h4>2. Modifications</h4>
            <p>
              The Service Provider is dedicated to ensuring that the Website is as useful and effective as possible. They reserve the right to modify the Website or charge for their services at any time and for any reason. Any charges for the Website or its services will be clearly communicated to you.
            </p>
          </section>

          <section className="mb-4">
            <h4>3. Personal Data</h4>
            <p>
              The Website stores and processes personal data that you have provided to the Service Provider to provide the Service. It is your responsibility to maintain the security of your device and access to the Website. The Service Provider strongly advises against jailbreaking or rooting your device, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your device to malware, viruses, malicious programs, compromise your device's security features, and may result in the Website not functioning correctly.
            </p>
          </section>

          <section className="mb-4">
            <h4>4. Third-Party Services</h4>
            <p>
              Please note that the Website utilizes third-party services that have their own Terms and Conditions. Below are links to the Terms and Conditions of the third-party service providers used by the Website:
            </p>
            <ul>
              <li><a href="https://www.google.com/adsense" target="_blank" rel="noopener noreferrer">Google AdSense</a></li>
            </ul>
            <p>
              Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Website require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Website does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
            </p>
          </section>

          <section className="mb-4">
            <h4>5. Limitation of Liability</h4>
            <p>
              In terms of the Service Provider's responsibility for your use of the Website, it is important to note that while they strive to ensure that it is streamlined and accurate at all times, they rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the Website.
            </p>
          </section>

          <section className="mb-4">
            <h4>6. Contact Us</h4>
            <p>
              If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:phonenumber.location@gmail.com">phonenumber.location@gmail.com</a>.
            </p>
          </section>
        </div>

        {/* Right side static boxes */}
        <div className="col-lg-4 d-none d-lg-block">
          <div className="card mb-4 rounded-4">
            <img src={post3} className="card-img-top custom-card-img rounded-4" alt="Description" />
            <div className="card-body">
              <h5 className="card-title">Worldwide perpetration of Augmentative and Indispensable Communication results request</h5>
              <p className="card-text">In 2024, the geography of communicating apps is more dynamic and connected than ever ahead. Then are the most popular messaging apps that are shaping the way we communicate encyclopedically.</p><br />
              <p>Created At : September 18, 2024 By www.infoihub.com</p><br />
              <button className="learMoreBtn">Learn More</button>
            </div>
          </div>
          <div className="card mb-4 rounded-4">
            <img src={post4} className="card-img-top custom-card-img rounded-4" alt="Description" />
            <div className="card-body">
              <h5 className="card-title">Pivotal Benefits of Digital Transformation for Businesses</h5>
              <p className="card-text">What are the challenges businesses face during digital metamorphosis? In this blog, we’ll explore the pivotal benefits of embracing digital metamorphosis and how it can propel your business to new heights in moment’s digital period.</p><br />
              <p>Created At : September 14th, 2024 By www.infoihub.com</p><br />
              <button className="learMoreBtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive design for smaller screens */}
      <div className="row d-lg-none">
        <div className="col-12">
          <div className="card mb-4 rounded-4">
            <img src={post3} className="card-img-top custom-card-img rounded-4" alt="Description" />
            <div className="card-body">
              <h5 className="card-title">Worldwide perpetration of Augmentative and Indispensable Communication results request</h5>
              <p className="card-text">In 2024, the geography of communicating apps is more dynamic and connected than ever ahead. Then are the most popular messaging apps that are shaping the way we communicate encyclopedically.</p><br />
              <p>Created At : September 18, 2024 By www.infoihub.com</p><br />
              <button className="learMoreBtn">Learn More</button>
            </div>
          </div>
          <div className="card mb-4 rounded-4">
            <img src={post4} className="card-img-top custom-card-img rounded-4" alt="Description" />
            <div className="card-body">
              <h5 className="card-title">Pivotal Benefits of Digital Transformation for Businesses</h5>
              <p className="card-text">What are the challenges businesses face during digital metamorphosis? In this blog, we’ll explore the pivotal benefits of embracing digital metamorphosis and how it can propel your business to new heights in moment’s digital period.</p><br />
              <p>Created At : September 14th, 2024 By www.infoihub.com</p><br />
              <button className="learMoreBtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HOC(TermsCondition)