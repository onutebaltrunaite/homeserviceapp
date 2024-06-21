import React from 'react';
import './Category.css'; // You can create this CSS file for styling

const Painting = () => {
    return (
        <div className="category">
            <img src="https://img.icons8.com/?size=100&id=65329&format=png&color=000000" className="category-icon"></img>
            <h4 className="category-title">Painting Services</h4>
        </div>
    );
};

export default Painting;