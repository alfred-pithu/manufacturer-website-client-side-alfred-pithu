import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class=" hero h-screen bg-base-100 ">
            <div class="card w-full max-w-lg shadow-2xl bg-base-100 rounded ">

                <div class="card-body">

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                        <label class="label">
                            <h2> </h2>
                        </label>
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>

                        <input type="text" placeholder="password" class="input input-bordered" />

                        <label class="label">
                            <h2> </h2>
                        </label>
                    </div>

                    <Link to='/signup'>New Here ? <span className='text-primary font-semibold'>Signup</span></Link>

                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;