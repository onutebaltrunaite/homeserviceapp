import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';

// import CategoryList from "@/components/home/CategoryList";
import BusinessList from "../home/BusinessList";
import Dashboard from '../components/Dashboard/Dashboard.jsx';

const Home = ({ handleSearch }) => {
  return (
    <div>
      <Dashboard/>
      <SearchBar onSearch={handleSearch} />
       <div>Layout'as</div>
      <CategoryCard />
      <BusinessList />
    </div>
  );
};

export default Home;
