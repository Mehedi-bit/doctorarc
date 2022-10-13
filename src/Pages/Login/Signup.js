import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from "../Shared/Loading";

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { 
        register, 
        handleSubmit,
        formState: { errors } 
    } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let signInErrorMessage;
    if (error || gError) {
        signInErrorMessage = <p className="text-red-600">{error.message || gError.message}</p>
    }


    if (gUser) {
        console.log(gUser);
    }
    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body text-center"> 
                <h2 className="text-center text-2xl font-bold">Login</h2>

                {/* form controlling */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  
                        {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                            message: 'Provide a valid email'
                        }
                        })}
                        type="email" 
                        placeholder="Your Email" 
                        className="input input-bordered w-full max-w-xs" 
                        />
                    <label className="label">
                        {errors?.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors?.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        
                    </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  
                        {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be at least 6 characters'
                        }
                        })}
                        type="text" 
                        placeholder="Password" 
                        className="input input-bordered w-full max-w-xs" 
                        />
                    <label className="label">
                        {errors?.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        {errors?.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        
                    </label>
                    </div>
                    {signInErrorMessage}
                    <input type="submit" value="Login" className="btn text-white w-full max-w-xs" />
                    <p><small>Already have an account? <Link className="text-primary" to="/login">Login</Link></small></p>
                </form>

                <div className="divider">OR</div>
                <button 
                className="btn btn-outline" 
                onClick={()=> signInWithGoogle()} 
                > Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;