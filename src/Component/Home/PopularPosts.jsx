import React from 'react';
import cameraImage from '../../assets/images/camera.jpg';
import shoesImage from '../../assets/images/shoes.jpg';
import photographyImage from '../../assets/images/photography.jpg';
import fashionImage from '../../assets/images/fashion.jpg';
import post8 from '../../assets/images/New folder/savemoneyplan.png';
import post9 from '../../assets/images/New folder/smarthybridcarss.png';
import post10 from '../../assets/images/New folder/happymodbanner.png';
import post11 from '../../assets/images/New folder/coldplay.png';
import post12 from '../../assets/images/New folder/thumb/onlineplateform.png';
import post13 from '../../assets/images/New folder/innerblogs/fitnessoutdoors.png';
import { Link } from 'react-router-dom';


const PopularPosts = () => {
  const posts = [
    {
      id: 1,
      redirect: "/emicalculator",
      image: post8,
      title: "How the Arrange Student Loan Pursuing Public Service Forgiveness",
      text: "Student loan borrowers working in public service who are seeking for remission may need to navigate some challenges due to two ongoing legal cases affecting prepayment.",
      date: "Created At : September 18th, 2024 By www.infoihub.com",
      category: "Finance"
    },
    {
      id: 2,
      redirect: "/hybridcards",
      image: post9,
      title: "Smart mongrel buses in India Understanding the Advantages and Disadvantages",
      text: "mongrel vehicles, which combine traditional internal combustion machines with electric motors, give enhanced energy effectiveness and lower emigrations. This makes them a practical choice for environmentally conscious commuters navigating India's civic geography.",
      date: "Created At : 7th August, 2024 By www.infoihub.com",
      category: "AutoMobile"
    },
    {
      id: 3,
      redirect: "/happymodgames",
      image: post10,
      title: "Play free mod games Happymod games & appy mod com",
      text: "happymod game challenge that offers countless hours of fun and exhilarating action. This game offers an intense and competitive gaming experience whether you're a casual player looking for a online games,crazy games,poki games,appy mod com,haapy mod com,ppymod,happymod2,trying to win every race.",
      date: "Created At : 7th August, 2024 By www.infoihub.com",
      category: "Games"
    },
    {
      id: 4,
      redirect: "/coldplay",
      image: post11,
      title: "Coldplay musicale ticket disagreement",
      text: 'Coldplay Music of the Spheres World Tour, Alternative, International, Pop, Rock. Hello everyone!We’re nearly done with Moon Music, and we’d love for you to join us on a song called "One World." Your voice would mean a lot to us!',
      date: "Created At : 7th August, 2024 By www.infoihub.com",
      category: "Music"
    }
  ];

  const trendingPosts = [
    { id: 1, title: "Healthy Dieting Habits for any age" },
    { id: 2, title: "10 foods you should try in Kathmandu" },
    { id: 3, title: "Everything You Wanted to Know About Love Life" },
    { id: 4, title: "Yoga works only under these conditions" },
    { id: 5, title: "Top 10 mysterious places you didn't know" }
  ];

  const categories = [
    { id: 1, image: shoesImage, title: "Travel" },
    { id: 2, image: photographyImage, title: "Photography" },
    { id: 3, image: fashionImage, title: "Fashion" }
  ];

  return (
    <section className="popular-posts section-padding">
      <div className="container">

        <div className="row">
          <div className="col-md-7 col-lg-8">
            {posts.map(post => (
              <Link to={post.redirect}>
                <div className="card mb-4" key={post.id}>
                  <div className="row no-gutters align-items-center">
                    <div className="col-md-6">
                      <a>
                        <img src={post.image} className="card-img" alt={post.title} />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <ul className="category-tag-list">
                          <li className="category-tag-name">
                            <a >{post.category}</a>
                          </li>
                        </ul>
                        <h5 className="card-title title-font">
                          <a >{post.title}</a>
                        </h5>
                        <p className="card-text">{post.text}</p>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="col-md-5 col-lg-4 pt-5">
            <Link to={"/beverages"}>
              <div className="card mb-4">
                <a>
                  <img src={post12} className="card-img" alt="post 11" />
                </a>
                <div className="card-body">
                  <ul className="category-tag-list">
                    <li className="category-tag-name">
                      <a >E-Learning</a>
                    </li>
                  </ul>
                  <h5 className="card-title title-font">
                    <a >10 Essential Features of An Online Learning Platform</a>
                  </h5>
                  <p className="card-text">Discover the perfect potables to enhance your spring fitness routine. These drinks will help keep you doused , reenergized, and ready to attack your exercises with renewed vigor.</p>
                  <span>Created At : September 10th, 2024 By www.infoihub.com</span>
                </div>
              </div>
            </Link>
            <Link to={"/hydration-drinks"}>
              <div className="card mb-4">
                <a>
                  <img src={post13} className="card-img" alt="post 11" />
                </a>
                <div className="card-body">
                  <ul className="category-tag-list">
                    <li className="category-tag-name">
                      <a >Hydration Drinks</a>
                    </li>
                  </ul>
                  <h5 className="card-title title-font">
                    <a >Revitalize your fitness routine by embracing the great outside</a>
                  </h5>
                  <p className="card-text">Ncorporating out-of-door time into your fitness routine can indeed have remarkable benefits. Sun, that frequently overlooked natural element, plays a pivotal part in enhancing your overall health and performance.</p>
                  <span>Created At : September 14th, 2024 By www.infoihub.com</span>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="sidebar-posts mt-4">
            <div className="sidebar-title">
            <h5><i className="fas fa-circle"></i>Categories</h5>
            </div>
            <div className="sidebar-content">
            <div className="category-name-list">
            {categories.map(category => (
                  <div className="card small-card" key={category.id}>
                    <a >
                      <img src={category.image} className="card-img" alt={category.title} />
                    </a>
                    <div className="card-img-overlay">
                      <h5 className="card-title title-font mb-0">
                        <a >{category.title}</a>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section >
  );
};

export default PopularPosts;
