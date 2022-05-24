import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.name)
        reset()
    };
    return (
        <form className=" hero h-screen bg-base-100 " onSubmit={handleSubmit(onSubmit)}>
            <div className="card w-full max-w-lg shadow-2xl bg-base-100 rounded ">

                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text" placeholder="Name" className="input input-bordered" {...register('name', {
                            required: {
                                value: true,
                                message: 'Your Name please'
                            }
                        })} />

                        <label className="label  text-red-500 text-sm">
                            {errors?.name?.type === 'required' && errors?.name?.message}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered" {...register('email', {
                            required: {
                                value: true,
                                message: 'Your Email please'
                            },
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Valid Email is required'
                            }
                        })} />
                        <label className="label  text-red-500 text-sm">
                            {errors?.email?.type === 'required' && errors?.email?.message}
                            {errors?.email?.type === 'pattern' && errors?.email?.message}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="text" placeholder="password" className="input input-bordered" {...register('pass', {
                            required: {
                                value: true,
                                message: 'Your Password please'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be more than 5 characters'
                            }
                        })} />

                        <label className="label text-red-500 text-sm">
                            {errors.pass?.type === 'required' && errors?.pass?.message}
                            {errors.pass?.type === 'minLength' && errors?.pass?.message}
                        </label>
                    </div>

                    <Link to='/login'>Already Registered ? <span className='text-primary font-semibold'>Login</span></Link>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Signup" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;