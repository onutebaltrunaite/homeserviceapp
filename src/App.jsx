import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';

function App() {


  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement search functionality here
  };


  return (
    
      <>
      <div> <NavBar /> </div>
      <div><SearchBar onSearch={handleSearch} /></div>
      <div>Layout'as</div>
      <div><CategoryCard/> </div>
      
      
      </>
  )
}

export default App;
