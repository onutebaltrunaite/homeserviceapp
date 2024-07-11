import React from 'react';
import styles from './Category.module.scss'; 

const Repair = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=RhJ0vJceSubS&format=png&color=000000" className={styles.categoryIcon}></img>    
            <h4 className={styles.categoryTitle}>Repair Services</h4>
        </div>
    );
};

export default Repair;