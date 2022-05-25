import { faCancel, faCross, faDeleteLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const MyOrderRow = ({ order, index, refetch }) => {
    const { itemName, orderQuantity, totalPrice, _id } = order;

    const deleteItem = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`Order of ${itemName} ${orderQuantity} units Deleted`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td onClick={deleteItem}> <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon> </td>
        </tr>
    );
};

export default MyOrderRow;