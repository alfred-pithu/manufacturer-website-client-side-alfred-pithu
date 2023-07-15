import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [isAdmin] = useAdmin(user?.email)

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-70 h-full bg-white text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin || <>
                            <li><Link to='/dashboard/myorders'> My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'> Add Review</Link></li>
                        </>
                    }
                    {
                        isAdmin && <>
                            <li><Link to='/dashboard/manageAllOrders'> Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addAProduct'> Add A Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'> Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProducts'> Manage  Products</Link></li>
                        </>
                    }

                    <li><Link to='/dashboard'> My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;