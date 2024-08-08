import React from 'react';
import styles from './CategoryCard.module.scss'; 
import { categories } from '../../consts/categories';

const CategoryCard = ({ onCategorySelect }) => {

  return (
    <div className={styles.categoryCard}>
      {categories.map((category) => (
        <div 
          key={category._id} 
          className={styles.categoryItem}
          onClick={() => onCategorySelect(category.name)} // Handle click to select category
        >
          <img 
            src={category.images[0].url} 
            alt={category.name} 
            className={styles.categoryImage} 
          />
          <h4 className={styles.categoryName}>{category.name}</h4>
        </div>
      ))}
    </div>
  );
};


export default CategoryCard;








