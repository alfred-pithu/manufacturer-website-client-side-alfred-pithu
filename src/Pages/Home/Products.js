import useAllProducts from '../../Hooks/useAllProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products] = useAllProducts();


    return (
        <div className='my-20  grid grid-cols-1 lg:grid-cols-3 gap-10 p-4'>
            {
                products?.map((p) => <ProductCard product={p} key={p._id} ></ProductCard>)
            }
        </div>
    );
};

export default Products;