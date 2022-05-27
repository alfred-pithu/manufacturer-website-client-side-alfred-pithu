import { faCancel, faCross, faDeleteLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const MyOrderRow = ({ index, order, setDeleteOrder }) => {
    const { itemName, orderQuantity, totalPrice, _id } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>

            <td onClick={() => setDeleteOrder(order)}>
                <label htmlFor="my-order-modal" className=" btn bg-red-400 border-0 btn-xs rounded-lg  modal-button">
                    <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
                </label> </td>
        </tr>
    );
};

export default MyOrderRow;