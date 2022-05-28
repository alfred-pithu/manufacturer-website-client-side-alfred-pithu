import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useAllProducts = (dependency) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://frozen-tundra-73079.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [dependency])

    return [products]

}
export default useAllProducts;