import useAllProducts from '../../Hooks/useAllProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products] = useAllProducts();


    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mt-10 mb-5 underline  '>Products</h2>


            {
                products?.length > 1 || <div className='flex justify-around'>


                    <span className="loading loading-spinner loading-lg"></span>
                    <span className="loading loading-spinner loading-lg"></span>
                    <span className="loading loading-spinner loading-lg"></span>


                </div>
            }
            <div className='my-20  grid grid-cols-1 lg:grid-cols-3 gap-10 p-4'>
                {
                    products?.map((p) => <ProductCard product={p} key={p._id} ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;