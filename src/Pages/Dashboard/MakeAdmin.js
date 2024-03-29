import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const [isAdmin] = useAdmin(user?.email)



    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://manufacturer-server-l39p.onrender.com/users', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwtToken')}`
        }
    }).then(res => {
        if (res.status === 403) {
            signOut(auth)
            navigate('/login')
        }
        return res.json()
    }))

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='mb-3 text-xl'>Make Admin : {users?.length}</h2>

            {/* table */}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((u, index) => <MakeAdminRow index={index} refetch={refetch} key={u._id} user={u}></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;