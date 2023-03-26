import React from 'react';

// Functions
import { shorten } from '../helper/functions';

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{width:"200px"}}/>
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <a>Details</a>
        <div>
          <button>add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;