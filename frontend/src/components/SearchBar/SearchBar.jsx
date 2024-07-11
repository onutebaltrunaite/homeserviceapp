import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for services..."
                className={styles.searchInput}
            />
            <button onClick={handleSearch} className={styles.searchButton}>Search</button>
        </div>
    );
};

export default SearchBar;