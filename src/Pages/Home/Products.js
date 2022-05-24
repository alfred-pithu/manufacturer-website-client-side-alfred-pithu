import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className='my-20  grid grid-cols-1 lg:grid-cols-3 gap-10 p-4'>
            {
                products.map((p) => <ProductCard product={p} key={p._id} ></ProductCard>)
            }
        </div>
    );
};

export default Products;