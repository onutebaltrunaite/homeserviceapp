import React from 'react';
import styles from './Category.module.scss'; 

const Cleaning = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=12238&format=png&color=000000" className={styles.categoryIcon} alt="Cleaning Icon"></img>
            <h4 className={styles.categoryTitle}>Cleaning Services</h4>
        </div>
    );
};

export default Cleaning;
