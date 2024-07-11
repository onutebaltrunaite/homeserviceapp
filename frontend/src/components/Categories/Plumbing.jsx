import React from 'react';
import styles from './Category.module.scss';

const Plumbing = () => {
    return (
        <div className={styles.category}>
            <img src="https://img.icons8.com/?size=100&id=zKnFtoamppoG&format=png&color=000000" className={styles.categoryIcon} alt="Plumbing Icon"></img>
            <h4 className={styles.categoryTitle}>Plumbing Services</h4>
        </div>
    );
};

export default Plumbing;
