import React from 'react';
import styles from './CategoryCard.module.scss'; 
import { categories } from '../../consts/categories';

const CategoryCard = () => {
  return (
    <div className={styles.categoryCard}>
      {categories.map((category) => (
        <div key={category._id} className={styles.categoryItem}>
          <img 
            src={category.images[0].url} 
            alt={category.name} 
            className={styles.categoryImage} 
          />
          <span className={styles.categoryName}>{category.name}</span>
        </div>

        
      ))}
    </div>
  );
};


export default CategoryCard;








