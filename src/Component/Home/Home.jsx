import React from 'react';
import { HOC } from '../HOC/HOC';

import banner1 from '../../assets/images/New folder/medium/fintechapp.png';
import post1 from '../../assets/images/New folder/thumb/reclaimethlifecycle.png';
import post2 from '../../assets/images/New folder/thumb/physioinhealth.png';
import post3 from '../../assets/images/New folder/thumb/globalcommunicationsolution.png';
import post4 from '../../assets/images/New folder/thumb/digitaltransformation.png';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FeaturedPosts from './FeaturedPosts';
import PopularPosts from './PopularPosts';
import { Link } from 'react-router-dom';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <section className="banner-section">
        <div className="main-banner">
          <div className="container">
            <div className="banner-bg">
              <div className="banner-bg-left"></div>
              <div className="banner-bg-right">
                {/* Slider Carousel */}
                <Slider {...settings} className="banner-carousel">
                  <div className="banner-item">
                    <div className="banner-img">
                      <Link to={"/media"}>
                        <img src={banner1} alt="Banner 1" />
                      </Link>
                    </div>
                    <div className="banner-text">
                      <ul className="category-tag-list">
                        <li className="category-tag-name">
                          <a >Finance</a>
                        </li>
                      </ul>
                      <div className="title-font">
                        <Link to={"/media"}>
                          How to Manage Fintech Application for stylish stoner Experience?
                        </Link>
                      </div>
                      <p className="mb-3">
                        Septermber 14th, 2024
                      </p>
                      <Link to={"/media"} className="btn btn-solid btn-read">Read More</Link>
                    </div>
                  </div>

                  <div className="banner-item">
                    <div className="banner-img">
                      <Link to={"/media"}>
                        <img src={banner1} alt="London" />
                      </Link>
                    </div>
                    <div className="banner-text">
                      <ul className="category-tag-list">
                        <li className="category-tag-name">
                          <a >media</a>
                        </li>
                      </ul>
                      <div className="title-font">
                        <Link to={"/media"}>
                          How to start Fintech Application Development?
                        </Link>
                      </div>
                      <p className="mb-3">
                        Septermber 14th, 2024
                      </p>
                      <Link to={"/media"} className="btn btn-solid btn-read">Read More</Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content with cards */}
        <div className="container">
          <div className="more-content-grid py-30">
            <h2 className='border-bottom border-3 mb-3 fontBold'>Health & bussiness</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/sexhealth"}>
                    <img src={post1} className="card-img-top" alt="post1" />
                  </Link>
                  <div className="card-body px-3">
                    <h5 className="card-title title-font">
                      <Link to={"/sexhealth"}>
                        how to get Reclaiming Health Through Lifestyle
                      </Link>
                    </h5>
                    <div className="author-date">
                      <Link className="author" to={"/sexhealth"}>
                        <span className="writer-name-small">While quick fixes and trendy results may feel charming, the most sustainable way to manage metabolic conditions and maintain overall health is by espousing a balanced life.</span>
                      </Link>
                      <div className="date w-100 pt-2" >
                        <span >Created At : September 13th, 2024 By
                          <br />
                          www.infoihub.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/weapons"}>
                    <img src={post2} className="card-img-top" alt="post1" />
                  </Link>
                  <div className="card-body px-3">
                    <h5 className="card-title title-font">
                      <Link to={"/weapons"}>
                        The part of Physiotherapists in Public Health enterprise
                      </Link>
                    </h5>
                    <div className="author-date">
                      <Link className="author" to={"/weapons"}>
                        <span className="writer-name-small">Physiotherapists are vital to public health, extending their moxie beyond traditional recuperation to engage in public health juggernauts, promote health, and support community heartiness programs.</span>
                      </Link>
                      <div className="date w-100 pt-2" >
                        <span >Created At : September 11th, 2024 By
                          <br />
                          www.infoihub.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/messaging"}>
                    <img src={post3} className="card-img-top" alt="post1" />
                  </Link>
                  <div className="card-body px-3">
                    <h5 className="card-title title-font">
                      <Link to={"/messaging"}>
                        Worldwide perpetration of Augmentative and Indispensable Communication results request
                      </Link>
                    </h5>
                    <div className="author-date">
                      <Link className="author" to={"/messaging"}>
                        <span className="writer-name-small">In 2024, the geography of communicating apps is more dynamic and connected than ever ahead. Then are the most popular messaging apps that are shaping the way we communicate encyclopedically</span>
                      </Link>
                      <div className="date w-100 pt-2" >
                        <span >Created At : September 18, 2024 By
                          <br />
                          www.infoihub.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/loan"}>
                    <img src={post4} className="card-img-top" alt="post1" />
                  </Link>
                  <div className="card-body px-3">
                    <h5 className="card-title title-font">
                      <Link to={"/loan"}>
                        pivotal Benefits of Digital Transformation for Businesses
                      </Link>
                    </h5>
                    <div className="author-date">
                      <Link className="author" to={"/loan"}>
                        <span className="writer-name-small">What are the challenges businesses face during digital metamorphosis? In this blog, we’ll explore the pivotal benefits of embracing digital metamorphosis and how it can propel your business to new heights in moment’s digital period.</span>
                      </Link>
                      <div className="date w-100 pt-2" >
                        <span >Created At : September 14th, 2024 By
                          <br />
                          www.infoihub.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedPosts />
      <PopularPosts />
      {/* <RecommendedPosts />
      <InstaPosts /> */}
    </>
  );
}

export default HOC(Home);
