import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user || gUser) {
            navigate('/')
        }
    }, [user, gUser, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || gError) {
        errorMessage = <p className='text-error mt-5'>{error.message || gError.message}</p>
    }

    //onSubmit function
    const onSubmit = data => {
        const email = data.email;
        const password = data.pass;
        signInWithEmailAndPassword(email, password)
        reset()
    };


    return (
        <div className=" hero h-screen bg-base-100 " >
            <div className="card w-full max-w-lg shadow-2xl bg-base-100 rounded ">

                <div className="card-body">

                    <form action="" onSubmit={handleSubmit(onSubmit)}>
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

                            <input type="password" placeholder="password" className="input input-bordered" {...register('pass', {
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

                        <Link to='/signup'>New here ? <span className='text-primary font-semibold'>Signup</span></Link>
                        {errorMessage}
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>


                    <div className="form-control my-5">
                        <button onClick={() => signInWithGoogle()} className="btn btn-ghost border-black hover:btn-primary">Continue with Google</button>
                    </div>

                </div>



            </div>
        </div>

    );
};

export default Login;

