import React, { } from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, index, refetch }) => {



    const makeAdmin = () => {
        const url = `https://frozen-tundra-73079.herokuapp.com/user/${user.email}`


        fetch(url, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${user.email} is an admin now`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>Yet To Set</td>
            <td className=' flex justify-center'>
                {
                    user?.role === 'admin' ?
                        <span className='bg-success text-white px-8 font-semibold rounded-md '>Admin</span>
                        :
                        <button onClick={makeAdmin} className='bg-black text-white px-3 rounded'>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default MakeAdminRow;