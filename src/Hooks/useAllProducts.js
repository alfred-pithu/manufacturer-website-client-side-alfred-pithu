import { useEffect, useState } from "react";

const useAllProducts = (dependency) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://manufacturer-server-l39p.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [dependency])

    return [products]

}
export default useAllProducts;


