import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.header}>
        <h1>About Us</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p>
            Welcome to HomeService, your trusted partner for all your home maintenance needs. Whether it's plumbing, electrical work, or general handyman services, our skilled professionals are here to help. With years of experience and a commitment to quality, we ensure that your home is in the best hands.
          </p>
        </div>
        {/* <div className={styles.imageContainer}>
          <img src="https://www.peerbits.com/static/3905412186deff06a07271c47b3c60df/189bc/on-demand-home-services-main.jpg" alt="Home Services" />
        </div> */}
        <div className={styles.address}>
          <h2>Our Address</h2>
          <p>HomeService</p>
          <p>123 Main Street</p>
          <p>Cityville, ST 12345</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086865715316!2d-122.44674718468115!3d37.76942077975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4c06a4f439%3A0x2f4552f22ec2a90a!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094120%2C%20USA!5e0!3m2!1sen!2sus!4v1620417201234!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
