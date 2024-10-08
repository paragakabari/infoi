import React from 'react';
import instagramIcon from '../../assets/images/instagram.svg';
import beautifulGirlImage from '../../assets/images/beautiful-girl.jpg';
import colorsImage from '../../assets/images/colors.jpg';
import cityPinkImage from '../../assets/images/city-pink.jpg';
import seaLighthouseImage from '../../assets/images/sea-lighthouse.jpg';
import boatImage from '../../assets/images/boat.jpg';
import beachSeaImage from '../../assets/images/beach-sea.jpg';
import orangeBusImage from '../../assets/images/orange-bus.jpg';
import tallImage from '../../assets/images/tall.jpg';

const InstaPosts = () => {
  const images = [
    beautifulGirlImage,
    colorsImage,
    cityPinkImage,
    seaLighthouseImage,
    boatImage,
    beachSeaImage,
    orangeBusImage,
    tallImage
  ];

  return (
    <section className="insta-posts">
      <div className="container">
        <div className="insta-title">
          <img src={instagramIcon} alt="Follow us on Instagram" />
          <h2>Follow us on Instagram</h2>
        </div>

        <div className="image-item-grid insta-slider">
          {images.map((image, index) => (
            <div className={`image-item ${index % 2 === 1 ? 'image-item-margin' : ''}`} key={index}>
              <a >
                <img src={image} alt={`Instagram Post ${index + 1}`} />
              </a>
              <a >
                <div className="image-hover">
                  <i className="fas fa-heart"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaPosts;
