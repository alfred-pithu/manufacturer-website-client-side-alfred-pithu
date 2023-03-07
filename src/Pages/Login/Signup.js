import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import Loading from '../Shared/Loading';
import useJWT from '../../Hooks/useJWT';


const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const [userAuth] = useAuthState(auth);

    const [
        updateProfile,
        updating
    ] = useUpdateProfile(auth);
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            updateProfile({ displayName })
        }
    }, [user, displayName, updateProfile])

    const [token] = useJWT(user || gUser)

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    const onSubmit = data => {
        setDisplayName(data.name);
        const email = data.email
        const password = data.pass
        createUserWithEmailAndPassword(email, password)
        // reset()
    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || gError) {
        console.log(error);
        errorMessage = <p className='text-error mt-5'>{error.message || gError.message}</p>
    }


    //setting/updating the user's name

    // if (user) {
    //     updateProfile({ displayName })
    // }

    // console.log(user?.user);


    return (
        <div className=" hero h-screen bg-base-100 " >

            <div className="card w-full max-w-lg shadow-2xl bg-base-100 rounded ">

                <div className="card-body">

                    <form action="" onSubmit={handleSubmit(onSubmit)}>
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

                        <Link to='/login'>Already Registered ? <span className='text-primary font-semibold'>Login</span></Link>

                        {errorMessage}

                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Signup" />
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

export default Signup;