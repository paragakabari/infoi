import React from 'react';
import { HOC } from '../HOC/HOC';
import { Link } from 'react-router-dom';

import post4 from '../../assets/images/New folder/thumb/digitaltransformation.png';
import post3 from '../../assets/images/New folder/thumb/globalcommunicationsolution.png';






const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* Breadcrumb navigation */}
      <div className="row justify-content-center">

        {/* Main content section */}
        <div className="d-flex align-items-center mb-4 fw-bold p-3" style={{ backgroundColor: '#f8f9fa' }}>
          <Link to={"/"} className="text-muted me-2">Home</Link>
          <i className="fa-solid fa-chevron-right me-2"></i>
          <span className="Textcolor">Privacy Policy</span>
        </div>
        <div className="col-lg-8 col-md-10">
          <h4 className="mb-4">Sequestration Policy and Terms of Use for infoihub.com</h4>



          
          <section className="mb-4">

            
            <h4>1. Privacy Policy for infoihub</h4>
            <p>
            At infoihub, accessible from www.infoihub.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by infoihub and how we use it.            </p>
          </section>

          <section className="mb-4">
            <h4>2. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us</h4>
            <p>infoihub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking user's movement on the website, and gathering demographic information.</p>
          </section>

          <section className="mb-4">
            <h4>3. Google DoubleClick DART Cookie</h4>
            <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="nofollow noopener">https://policies.google.com/technologies/ads</a></p>
           
          </section>

          <section className="mb-4">
            <h4>4. Privacy Policies</h4>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of infoihub. </p>
            <p> Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on infoihub, which are sent directly to user's browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.  </p>
            <p>Note that infoihub has no access to or control over these cookies that are used by third-party advertisers.</p>



          </section>

          <section className="mb-4">
            <h4>5. Third Party Privacy Policies</h4>
            <p>infoihub's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browser's respective websites.</p>

          </section>

          <section className="mb-4">
            <h4>6. Children's Information</h4>
            <p>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            </p>

            <p>infoihub does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

          </section>

          <section className="mb-4">
            <h4>7. Online Privacy Policy Only</h4>
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in infoihub. This policy is not applicable to any information collected offline or via channels other than this website.</p>

          </section>

          <section className="mb-4">
            <h4>Consent</h4>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
          </section>



{/* 
          <section className="mb-4">

            
            <h2>1. Preface</h2>
            <p>
              Drink to infoihub.com! This sequestration Policy and Terms of Use govern your use of our website, infoihub.com, and any affiliated services offered by infoihub.
              By using our website, you agree to the terms outlined in this policy. Please read this document precisely to understand how we collect, use, and cover your information.
            </p>
          </section>

          <section className="mb-4">
            <h2>2. Data Collection</h2>
            <p>We do not collect any stoner information or data from druggies.</p>
          </section>

          <section className="mb-4">
            <h2>3. Use of Data</h2>
            <p>We get and process your data for the following purposes:</p>
            <ul className='list-unstyled'>
              <li>To give and maintain our website.</li>
              <li>To manage your account and Terms & Condition mate program participation.</li>
              <li>To communicate with you regarding your account, inquiries, and updates.</li>
              <li>To enhance our website's functionality and stoner experience.</li>
              <li>To misbehave with legal scores.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2>4. Third-Party Services</h2>
            <p>
              While we do not allow third parties to pierce or reuse data directly, we may use third-party payment processors to grease deals and payments on our website.
              Please review their separate sequestration programs for further information.
            </p>
          </section>

          <section className="mb-4">
            <h2>5. Children's Sequestration</h2>
            <p>
              Our website is accessible to children; still, it is not designed or intended for children under the age of 13. We do not deliberately collect
              personal information from children under 13. However, please communicate us, and we will instantly cancel similar information, if you believe that a child has handed us with their particular information.
            </p>
          </section>

          <section className="mb-4">
            <h2>6. Security Measures</h2>
            <p>
              We apply reasonable security measures to cover your particular information from unauthorized access, exposure, revision, or destruction. Still, no data transmission over the internet or storage system can be guaranteed as 100% secure. Please take applicable preventives when participating your information online.
            </p>
          </section>

          <section className="mb-4">
            <h2>7. Gambling Disclaimer</h2>
            <p>
              We do not collect or store any information related to gambling conditioning. This platform does not include any gambling content.
              In our games, all the coins are virtual, and there is no real value to them. All the games are for fun and entertainment purposes; we do not ask for any payment collection from the user's side.
            </p>
          </section>

          <section className="mb-4">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this sequestration Policy, you can communicate us by email at <a href="mailto:phonenumber.location@gmail.com">phonenumber.location@gmail.com</a>.
            </p>
          </section> */}
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
  );
}

export default HOC(PrivacyPolicy);
