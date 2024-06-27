import React from 'react';
import styles from './Category.module.scss'; 

const Shifting = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=sbV9vt0Sb5VY&format=png&color=000000" className={styles.categoryIcon}></img>           
            <h4 className={styles.categoryTitle}>Shifting Services</h4>
        </div>
    );
};

export default Shifting;