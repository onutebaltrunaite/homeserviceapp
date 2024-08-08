import { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import BusinessList from "../home/BusinessList";
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';

const Home = ({ handleSearch }) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategorySelect(category) {
    console.log('Category selected:', category);
    setSelectedCategory(category);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CategoryCard onCategorySelect={handleCategorySelect} />
      <BusinessList category={selectedCategory} />
    </div>
  );
};

export default Home;
