import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageAllOrdersRow = ({ order, index, refetch, setDeleteOrder }) => {
    const { _id, email, itemName, customerName, totalPrice, paid, transactionId, status } = order;
    const [displayShipped, setDisplayShipped] = useState('');
    const [displayPending, setDisplayPending] = useState('')

    // if (status === 'Pending') {
    //     setDisplay('none')
    // }

    useEffect(() => {
        status === 'Pending' && setDisplayShipped('none');
        status === 'Shipped' && setDisplayShipped('inline');
        status === 'Pending' && setDisplayPending('inline')
        status === 'Shipped' && setDisplayPending('none')
    }, [status])

    const updateStatus = () => {
        fetch(`http://localhost:5000/updateToShipped/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'Application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Updated')
                }
            })
    }

    // const deleteUnpaidOrder = () => {
    //     fetch(`http://localhost:5000/order/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.deletedCount > 0) {
    //                 refetch()
    //                 toast.success('Order Deleted')

    //             }
    //         })
    // }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{customerName}</td>
            <td>{email}</td>
            <td>{totalPrice}</td>
            <td>
                {
                    !paid ? <span className='bg-green-600 text-sm px-4 rounded-md text-white '>Unpaid</span>
                        :
                        <>
                            <span style={{ display: displayPending }} className='bg-orange-500 text-white px-3 text-sm rounded-md display'>Pending</span>
                            <button style={{ display: displayPending }} className='bg-gray-500 px-3 rounded text-sm ml-4 text-white'>Update</button>

                            <span style={{ display: displayShipped }} className='bg-red-400 font-semibold text-white px-3  text-sm rounded-md'>Shipped</span>

                        </>
                }
            </td>
            <td >
                {
                    paid ? '' : <label style={{ cursor: 'pointer' }} htmlFor='admin-delete-modal' onClick={() => setDeleteOrder(order)}><FontAwesomeIcon icon={faCancel}></FontAwesomeIcon></label>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrdersRow;

// {
//     !paid ? <span className='bg-green-600 text-sm px-4 rounded-md text-white '>Unpaid</span>
//         :
// <>
//     <span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span>
//     <button>Update</button>
// </>
// }



{/* <>
    <span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span>
    <button>Update</button>
</>  */}

    // const checkStatus = () => {
    //     if (!paid) {
    //         return <span className='bg-green-600 text-sm px-4 rounded-md text-white '>Unpaid</span>
    //     }
    //     if (paid && status === 'Pending') {
    //         return <><span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span><button>Update</button></>

    //     }
    //     if (paid && status === 'Shipped') {
    //         return <span className='bg-blue-600 text-sm px-4 rounded-md text-white '>Shipped</span>
    //     }
    // }