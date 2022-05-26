import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/user/${user?.email}`

    const { data, isLoading, refetch } = useQuery(['userInfo', user?.email], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>User is {data.email}</h2>
        </div>
    );
};

export default MyProfile;