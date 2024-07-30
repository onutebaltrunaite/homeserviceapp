import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';

// import CategoryList from "@/components/home/CategoryList";
import BusinessList from "../home/BusinessList";


const Home = ({ handleSearch }) => {
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
       <div>Layout'as</div>
      <CategoryCard />
      <BusinessList />
    </div>
  );
};

export default Home;
