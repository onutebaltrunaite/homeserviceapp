import React from 'react';
import styles from './Category.module.scss'; 

const Electric = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=80432&format=png&color=000000" className={styles.categoryIcon} alt="Electric Icon"></img>
            <h4 className={styles.categoryTitle}>Electrical Services</h4>
        </div>
    );
};

export default Electric;
