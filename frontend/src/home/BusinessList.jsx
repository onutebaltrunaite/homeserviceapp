import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for API requests
import classNames from "classnames";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.scss";

const BusinessList = ({ category, className }) => {
  const [businesses, setBusinesses] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
          const res = await axios.get('http://localhost:5000/api/businesses');
          setBusinesses(res.data);
        

      } catch (err) {
        console.error(err);
      }
    };

    fetchBusinessDetails();
  }, []);

  const filteredBusiness = category
    ? businesses.filter((business) => business.category === category)
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;