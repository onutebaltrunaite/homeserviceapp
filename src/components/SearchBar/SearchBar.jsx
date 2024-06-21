import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for services..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
};

export default SearchBar;