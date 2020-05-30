import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop(){

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('https://fortniteapi.io/items/upcoming?lang=en', {
     method: 'GET',
     headers: { 'Authorization': 'API-KEY'}
    });
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  }

  return(
    <div>
      {items.map(item =>(
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}