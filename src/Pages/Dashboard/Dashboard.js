import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">

            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="  drawer-content">
                {/* <!-- Page content here --> */}
                {/* <h2 className='text-2xl mb-10'>Mother Dashboard</h2> */}
                <Outlet></Outlet>

            </div>


            <div className="drawer-side">
                <label htmlFor="drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'> My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'> Add Review</Link></li>
                    <li><Link to='/dashboard/myprofile'> My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;