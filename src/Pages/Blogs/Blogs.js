import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Blogs = () => {
    // const { data: products } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()))

    // console.log(products);


    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    // console.log(user.displayName);


    return (
        <div>
            Blogs


        </div>
    );
};

export default Blogs;