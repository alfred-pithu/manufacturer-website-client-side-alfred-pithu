import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Blogs = () => {
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