import React from 'react';

const ManageAllOrdersRow = ({ order, index, refetch }) => {
    const { _id, email, itemName, customerName, totalPrice, paid, transactionId, status } = order;
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
                            <span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span>
                            <button>Update</button>
                        </>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrdersRow;

// {
//     !paid ? <span className='bg-green-600 text-sm px-4 rounded-md text-white '>Unpaid</span>
//         :
//         <>
//             <span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span>
//             <button>Update</button>
//         </>
// }



{/* <>
    <span className='bg-orange-500 text-white px-3 text-sm rounded-md'>Pending</span>
    <button>Update</button>
</>  */}