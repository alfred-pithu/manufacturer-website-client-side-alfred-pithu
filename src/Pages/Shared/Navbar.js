import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navItems = <>
        <li className='btn list-none btn-outline btn-xs '><Link to='/'> Home </Link></li>

        {
            user ? <>

                <li className='btn btn-outline list-none btn-xs  '><Link to='/dashboard'> Dashboard </Link></li>

                <li className='btn list-none btn-outline btn-xs' onClick={() => signOut(auth)} ><Link to='/login'>LogOut</Link></li>

                <li className='text-white my-auto list-none bg-green-700 lg:px-3 rounded-lg text-center '>{user.displayName}</li>
            </>

                : <li className='btn list-none btn-outline btn-xs'><Link to='/login'> Login </Link></li>
        }
    </>


    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start lg:hidden ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow gap-y-5 bg-white rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
            </div>

            <div className="  navbar-center ">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Computer Mania</Link>
            </div>
            <div className="navbar-end w-auto ml-auto hidden lg:flex gap-x-2 ">
                {navItems}
            </div>

            {location.pathname.includes('dashboard') && <div className=' lg:hidden navbar-end'>
                <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                </label>
            </div>}

        </div>
    );
};

export default Navbar;



/*   <div className="navbar bg-base-100 ">

        <div className="navbar-start ">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white z-10 rounded-box w-52">
                    {navItems}
                </ul>
            </div>
            <h2 className="btn btn-ghost normal-case text-xl">Computer Mania</h2>
        </div>

        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-bold text-sm">
                {navItems}
            </ul>
        </div>

        {location.pathname.includes('dashboard') && <div className='navbar-end lg:hidden '>
            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

            </label>
        </div>}



    </div>  */