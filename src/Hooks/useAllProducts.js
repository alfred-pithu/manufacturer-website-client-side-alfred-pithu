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


    // ei hook ta use kortesi ManageProducts r Products er moddhe . chaisilam jehetu shob product er data fetch korte hocche duita page a e tai ekta custom hook banabo to fetch all the products . ManageProducts er moddhe product delet korar por refetch dorkar chilo bole ekhane useQuery use korsilam . kintu taile abar home page er Products section e error khacche . bole object is not iterable .  

    // const { data: products, refetch, isLoading } = useQuery('products', () => fetch('https://frozen-tundra-73079.herokuapp.com/products').then(res => res.json()))

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // console.log(products);

    // return [products, refetch]
}
export default useAllProducts;