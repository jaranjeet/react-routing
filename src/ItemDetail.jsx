import React, { useState, useEffect } from 'react';

export default function ItemDetail({match}){

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}&lang=en`,
    {headers: {'Authorization': 'API-KEY'}}
    );
    const item = await fetchItem.json();
    setItem(item.item);
    console.log(item.item);
  }
  return(
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt='' />
    </div>
  )
}