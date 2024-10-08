import React from 'react';
import lightsImage from '../../assets/images/lights.jpg';
import lighthouseImage from '../../assets/images/lighthouse.jpg';
import woodsImage from '../../assets/images/woods.jpg';
import writerImage from '../../assets/images/writer.jpg';

const RecommendedPosts = () => {
  const posts = [
    {
      id: 1,
      image: lightsImage,
      title: "5 brilliant ways to use lights",
      date: "21 Dec, 2019",
      category: "Lifestyle"
    },
    {
      id: 2,
      image: lighthouseImage,
      title: "7 things you don't know about Light house",
      date: "21 Dec, 2019",
      category: "Travel"
    },
    {
      id: 3,
      image: woodsImage,
      title: "You will get lost in these woods",
      date: "21 Dec, 2019",
      category: "Nature"
    }
  ];

  return (
    <section className="recommended-posts">
      <div className="container">
        <div className="section-title">
          <h2>Recommended posts</h2>
        </div>
        <div className="more-content-grid">
          <div className="row">
            {posts.map(post => (
              <div className="col-md-4" key={post.id}>
                <div className="card">
                  <a >
                    <img src={post.image} className="card-img-top" alt={post.title} />
                  </a>
                  <div className="card-body px-3">
                    <ul className="category-tag-list">
                      <li className="category-tag-name">
                        <a >{post.category}</a>
                      </li>
                    </ul>
                    <h5 className="card-title title-font">
                      <a >{post.title}</a>
                    </h5>
                    <div className="author-date">
                      <a className="author" >
                        <img src={writerImage} alt="Author" className="rounded-circle" />
                        <span className="writer-name-small">Julie</span>
                      </a>
                      <a className="date" >
                        <span>{post.date}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedPosts;
