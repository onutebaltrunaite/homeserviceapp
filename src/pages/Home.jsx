import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';

const Home = ({ handleSearch }) => {
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>Layout'as</div>
      <CategoryCard />
    </div>
  );
};

export default Home;
