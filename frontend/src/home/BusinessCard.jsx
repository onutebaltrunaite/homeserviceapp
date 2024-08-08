// Button reikia pasidaryti
import styles from "./BusinessCard.module.scss";
import SpecificBusiness from "./SpecificBusiness";
import { useNavigate } from 'react-router-dom';

const BusinessCard = ({ business }) => {
  const navigate = useNavigate();
  const businessId = business._id;

  const handleClick = () => {
    // Redirect to the specific business page
    navigate(`/business/${businessId}`);
  };

  return (
    <div className={styles.card}>
      {business.images.length && (
        <img
          src={business.images[0].url}
          alt={business.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <button onClick={handleClick}>Book Now</button>
      </div>
    </div>
  );
};

export default BusinessCard;