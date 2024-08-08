import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import styles from './SpecificBusiness.module.scss'; 
import { PopupButton } from "react-calendly";

const SpecificBusiness = () => {
    const { id } = useParams(); // Get the businessId from the URL
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/businesses/${id}`);
                setBusiness(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBusiness();
    }, [id]);


    if (!business) return <p>Loading...</p>;


    return (
      <div className={styles.businessContainer}>
        <h1 className={styles.businessName}>{business.name}</h1>
        {business.images && business.images.length > 0 && (
          <img
            src={business.images[0].url}
            alt={business.name}
            className={styles.businessImage}
          />
        )}
        <div className={styles.businessDetails}>
          <p className={styles.businessAbout}>{business.about}</p>
          <p className={styles.businessAddress}>
            <strong>Address:</strong> {business.address}
          </p>
          <p className={styles.businessCategory}>
            <strong>Category:</strong> {business.category}
          </p>
          <p className={styles.businessContact}>
            <strong>Contact Person:</strong> {business.contactPerson}
          </p>
          <p className={styles.businessEmail}>
            <strong>Email:</strong> {business.email}
          </p>
        </div>
        <div>
        <PopupButton
          url="https://calendly.com/baltrunaiteo/test"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Book now!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
      </div>
    );
  };

export default SpecificBusiness;