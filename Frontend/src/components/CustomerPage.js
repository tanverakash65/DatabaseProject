import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const handleOrder = (itemId) => {
    // Logic for placing an order
  };

  return (
    <div>
      <h1>Customer Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <button onClick={() => handleOrder(item.id)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerPage;
