import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';
import BusinessList from "../home/BusinessList";

const Services = ({ handleSearch }) => {
  return (
    <div>
      <h1>Our Services</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <CategoryCard />
        <BusinessList />
      </div>
    </div>
  );
};

export default Services;