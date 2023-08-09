'use client';

import { useState } from 'react';

export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  let [quantity, setQuantity] = useState([0, 0, 0]);

  return (
    <div>
      <h2 className="title">Products</h2>
      {products.map((element, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} alt={element} className="food-img" />
            <h4>{products[index]} $40</h4>
            <span>{quantity[index]}</span>
            <button
              onClick={() => {
                let copy = [...quantity];
                copy[index]++;
                setQuantity(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...quantity];
                copy[index]--;
                setQuantity(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
