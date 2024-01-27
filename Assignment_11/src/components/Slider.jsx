import React from 'react';
import { Slider, Typography } from '@mui/material';

const ProductSlider = () => {
  const products = [
    { id: 1, name: 'Product 1', imageUrl: 'https://i.imgur.com/Qphac99.jpeg' },
    { id: 2, name: 'Product 2', imageUrl: 'https://i.imgur.com/Qphac99.jpeg' },
    { id: 3, name: 'Product 3', imageUrl: 'https://i.imgur.com/Qphac99.jpeg' },
    // Add more products as needed
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Featured Products
      </Typography>
      <Slider
        aria-label="Product slider"
        defaultValue={0}
        step={1}
        min={0}
        max={products.length - 1}
        marks
        track="inverted"
        style={{ width: '80%', margin: '0 auto' }}
        onChange={(event, value) => {
          // Handle slider value change if needed
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {products.map(product => (
          <img
            key={product.id}
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '200px', margin: '0 10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
