import React from 'react';
import styles from './Category.module.scss'; 

const Painting = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=65329&format=png&color=000000" className={styles.categoryIcon}></img>
            <h4 className={styles.categoryTitle}>Painting Services</h4>
        </div>
    );
};

export default Painting;