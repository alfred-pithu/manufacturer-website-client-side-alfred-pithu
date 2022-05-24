import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className='my-10 border grid grid-cols-1 lg:grid-cols-3 gap-10 p-4'>
            {
                products.map((p, index) => <ProductCard product={p} key={index} ></ProductCard>)
            }
        </div>
    );
};

export default Products;