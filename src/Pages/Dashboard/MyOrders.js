import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    // const [myOrders, setMyOrders] = useState([]);
    const url = `http://localhost:5000/order?email=${user?.email}`

    const { data: myOrders, isLoading, refetch } = useQuery(['myOrders', user], () => fetch(url).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    // refetch()
    return (
        <div>
            <h2>My Orders : {myOrders.length}</h2>

            {/* //table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <MyOrderRow key={order._id} refetch={refetch} index={index} order={order}></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;