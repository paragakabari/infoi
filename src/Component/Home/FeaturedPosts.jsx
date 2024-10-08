import React from 'react';

import post4 from '../../assets/images/New folder/innerblogs/hireoffshoreemployee.png';
import post5 from '../../assets/images/New folder/innerblogs/revolutegamingexp.png';
import post6 from '../../assets/images/New folder/innerblogs/3dartingame.png';
import post7 from '../../assets/images/New folder/innerblogs/robotsergory.png';
import { Link } from 'react-router-dom';


const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <div className="container">
        <div className="section-title">
          <h2>technology</h2>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <div className="featured-left">
              <div className="card">
                <Link to={"/cradit-card"}>
                  <img src={post4} className="card-img" alt="Lifestyle of woman in London" />
                </Link>
                <div className="card-img-overlay">
                  <ul className="category-tag-list">
                    <li className="category-tag-name">
                      <a >Finance</a>
                    </li>
                  </ul>
                  <h5 className="card-title title-font">
                    <a >Reason for Hire Offshore Employee?</a>
                  </h5>
                  <p className="card-text mb-3">
                    demand for coastal Hand is driven by factors like the global tech gift deficit, digital metamorphosis acceleration, and cost pressures. Whether you’re a incipiency or an established company, coastal development can help you introduce, gauge efficiently, and concentrate on core business strategies.
                  </p>
                  <p>Created At : September 15th, 2024 By www.infoihub.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="featured-right">
              <PostCard
                redirect={"/ai"}
                image={post5}
                category={["Gaming"]}
                createdby="Created At : 15th September, 2024 By www.infoihub.com"
                title="The part of 3D Art in Enhancing Your Mobile Game"
                date="landing and retaining players’ attention hinges on plates and visual appeal. The shift from simple 2D pucks to advanced 3D illustrations in mobile games has converted the gaming experience."
              />

            </div>
          </div>
        </div>


        <div className="row mt-4">

          <div className="col-md-12 col-lg-5">
            <div className="featured-right">
              <PostCard
                redirect={"/travel"}
                image={post6}
                category={["Animation"]}
                title="How to Revise Your Gaming Experience?"
                createdby="Created At : September 16th, 2024 By www.infoihub.com"
                date="Discover how AI Beast revolutionizes online marketing by furnishing unlimited free buyer business and deals. This innovative platform harnesses the power of artificial intelligence to drive targeted business to your offers, performing in increased transformations and profit."
              />

            </div>
          </div>

          <div className="col-md-12 col-lg-7">
            <div className="featured-left">
              <div className="card">
                <Link to={"/Car"}>
                  <img src={post7} className="card-img" alt="Lifestyle of woman in London" />
                </Link>
                <div className="card-img-overlay">
                  <ul className="category-tag-list">
                    <li className="category-tag-name">
                      <a >HealthCare</a>
                    </li>
                  </ul>
                  <h5 className="card-title title-font">
                    <a >How to use Technology in Health care & Treatment</a>
                  </h5>
                  <p className="card-text mb-3">
                    The healthcare assiduity, presently valued at$ 2 trillion, faces significant challenges due to high costs and regulatory obstacles. It's laboriously seeking advancements across colorful disciplines.
                  </p>
                  <p>Created At : 10th August, 2024 By www.infoihub.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const PostCard = ({ image, category, title, date, createdby, redirect }) => {
  return (
    <>
      <Link to={redirect}>
        <div className="card rounded-3" >
          <a >
            <img src={image} className="card-img-top" alt={title} />
          </a>
          <div className="p-3">
            <ul className="category-tag-list">
              <li className="category-tag-name">
                <a >{category}</a>
              </li>
            </ul>
            <h5 className="card-title title-font">
              <a >{title}</a>
            </h5>
            <p className="card-text mb-3">
              {date}
            </p>
            <p>{createdby}</p>
          </div>
          {/* <div className="card-body">
          <ul className="category-tag-list">
          {category.map((cat, index) => (
            <li className="category-tag-name" key={index}>
            <a >{cat}</a>
            </li>
            ))}
            </ul>
            <h5 className="card-title title-font">
            <a >{title}</a>
            </h5>
            <div className="author-date">
            <a className="author" >
            </a>
            <a className="date" >
              <span>{date}</span>
              </a>
              </div>
              </div> */}
        </div >
      </Link>
    </>
  );
};

export default FeaturedPosts;
