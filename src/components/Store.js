import React, { useContext } from 'react';

//Components
import Product from './shared/Product';

//Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const Products = useContext(ProductsContext)

    return (
        <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"space-between"}}>
            {
                Products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;