'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [isShowPass, setIsShowPass] = useState(false);
    const handleRegisterFunc = async(data) => {
        // এখানে name, photo, email, password এবং terms-এর সব ডাটা পাবে
        console.log("Registration Data:", data);

        const { email, name, photo, password } = data;
        
        // for push data in mongodb
        const {data: res, error} = await authClient.signUp.email({
        name: name, // required
        email: email, // required
        password: password, // required
        image: photo,
        callbackURL: "/",
        });
        console.log(res, error);
        
        if(error){
            alert(error.message)
        }
        if(res){
            alert('Signup Successful')
        }
        
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 shadow-sm border border-gray-200">
                
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-700 mt-5">
                    Register your account
                </h2>
                
                <div className="divider my-8 px-5"></div>

                <form className="card-body p-0" onSubmit={handleSubmit(handleRegisterFunc)}>
                    
                    {/* Name Field */}
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Your Name
                        </legend>
                        <input
                            type="text"
                            {...register('name', { required: "Name is required" })}
                            placeholder="Enter your name"
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
                    </fieldset>

                    {/* Photo URL Field */}
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Photo URL
                        </legend>
                        <input
                            type="text"
                            {...register('photo', { required: "Photo URL is required" })}
                            placeholder="Enter photo URL"
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        {errors.photo && <p className='text-red-500 text-sm mt-1'>{errors.photo.message}</p>}
                    </fieldset>

                    {/* Email Field */}
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Email
                        </legend>
                        <input
                            type="email"
                            {...register('email', { required: "Email is required" })}
                            placeholder="Enter your email address"
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </fieldset>

                    {/* Password Field */}
                    <fieldset className="fieldset mb-4 relative">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Password
                        </legend>
                        <input
                            type="password"
                            {...register('password', { 
                                required: "Password is required",
                                minLength: { value: 6, message: "Min 6 characters" }
                            })}
                            placeholder="Enter your password"
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        <span className=' absolute right-2 top-6' onClick={()=> setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye />: <FaEyeSlash />}</span>
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </fieldset>

                    {/* Terms and Conditions Checkbox */}
                    <div className="form-control mt-2">
                        <label className="flex flex-row items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                {...register('terms', { required: true })}
                                className="checkbox checkbox-sm rounded-none border-gray-400" 
                            />
                            <span className="label-text font-semibold text-gray-500">
                                Accept <span className="text-gray-700">Term & Conditions</span>
                            </span>
                        </label>
                        {errors.terms && <p className='text-red-500 text-xs mt-1'>You must accept terms</p>}
                    </div>

                    {/* Register Button */}
                    <div className="mt-8">
                        <button type="submit" className="btn w-full bg-[#403F3F] hover:bg-black text-white border-none rounded-none py-4 h-auto text-lg">
                            Register
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <p className="text-center mt-8 font-semibold text-gray-600">
                    Already Have An Account ?{" "}
                    <Link href="/login" className="text-[#F75B5F] hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;