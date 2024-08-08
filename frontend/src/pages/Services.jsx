import { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';
import BusinessList from "../home/BusinessList";

const Services = ({ handleSearch }) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategorySelect(category) {
    console.log('Category selected:', category);
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Our Services</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <CategoryCard onCategorySelect={handleCategorySelect} />
        <BusinessList category={selectedCategory} />
      </div>
    </div>
  );
};

export default Services;