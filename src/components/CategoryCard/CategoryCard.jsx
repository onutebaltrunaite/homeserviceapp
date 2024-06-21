import React from 'react';
import './CategoryCard.css'; // Assuming you have a CSS file for styling
import Plumbing from '../Categories/Plumbing'; // Importing component for Plumbing
import Electric from '../Categories/Electric'; // Importing component for Electric
import Cleaning from '../Categories/Cleaning'; // Importing component for Cleaning
import Painting from '../Categories/Painting'; // Importing component for Painting
import Repair from '../Categories/Repair'; // Importing component for Repair
import Shifting from '../Categories/Shifting'; // Importing component for Shifting

// Define categories array within the same file
const categories = [
  { title: "Plumbing" },
  { title: "Electric" },
  { title: "Cleaning" },
  { title: "Painting" },
  { title: "Repair" },
  { title: "Shifting" },
];

const CategoryCard = () => {
  return (
    <div className="category-card"> {/* Assuming you apply styles directly via className */}
      {categories.map((category, index) => (
        renderCategory(category.title, index)
      ))}
    </div>
  );
};

// Function to render category components dynamically
const renderCategory = (title, key) => {
  switch (title) {
    case "Plumbing":
      return <Plumbing key={key} />;
    case "Electric":
      return <Electric key={key} />;
    case "Cleaning":
      return <Cleaning key={key} />;
    case "Painting":
      return <Painting key={key} />;
    case "Repair":
      return <Repair key={key} />;
    case "Shifting":
      return <Shifting key={key} />;
    default:
      return null;
  }
};

export default CategoryCard;








