import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminOrderDeleteModal from './AdminOrderDeleteModal';
import ManageAllOrdersRow from './ManageAllOrdersRow';

const ManageAllOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('allOrder', () => fetch(' https://manufacturer-server-l39p.onrender.com/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwtToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='mb-1 text-xl font-semibold text-center'>Manage All Orders : {orders?.length}</h2>
            <div className='divider w-1/3 mx-auto bg-black h-[1px] rounded'></div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product </th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Total Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length === 0 && <div className='flex justify-center'>
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                        }
                        {
                            orders?.map((order, index) => <ManageAllOrdersRow key={order._id} setDeleteOrder={setDeleteOrder} index={index} refetch={refetch} order={order}></ManageAllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <AdminOrderDeleteModal order={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch}></AdminOrderDeleteModal>
            }
        </div>
    );
};

export default ManageAllOrders;