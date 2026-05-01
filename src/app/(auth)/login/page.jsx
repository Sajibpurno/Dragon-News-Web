'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    // register এর সাথে errors ও ডেসট্রাকচার করে নাও
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [isShowPass, setIsShowPass] = useState(false);
    const handleLoginFunc = async(data) => {
        // এখানে সরাসরি {email, password} অবজেক্টটা পাবে
        console.log("Login Data:", data);

        const { email, password } = data;
                
                // for push data in mongodb
                const {data: res, error} = await authClient.signIn.email({
                email: email, // required
                password: password, // required
                rememberMe: true,
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
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 shadow-sm border border-gray-200">
                
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-700 mt-5">
                    Login your account
                </h2>
                
                <div className="divider my-8 px-5"></div>

                <form className="card-body p-0" onSubmit={handleSubmit(handleLoginFunc)}>
                    
                    {/* Email Field with Fieldset */}
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Email address
                        </legend>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            // register এর ভেতরে ভ্যালিডেশন রুলস
                            {...register('email', { required: "Email is required" })}
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        {/* এরর থাকলে মেসেজ দেখাবে */}
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </fieldset>

                    {/* Password Field with Fieldset */}
                    <fieldset className="fieldset mb-4 relative">
                        <legend className="fieldset-legend font-bold text-gray-700 text-lg p-0 mb-2">
                            Password
                        </legend>
                        <input
                            type={isShowPass ?'text' : "password"}
                            {...register('password', { 
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                            placeholder="Enter your password"
                            className="input bg-gray-100 border-none rounded-none focus:outline-none w-full py-7"
                        />
                        <span className=' absolute right-2 top-6' onClick={()=> setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye />: <FaEyeSlash />}</span>
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </fieldset>

                    {/* Login Button */}
                    <div className="mt-8">
                        <button type="submit" className="btn w-full bg-[#403F3F] hover:bg-black text-white border-none rounded-none py-4 h-auto text-lg">
                            Login
                        </button>
                    </div>
                </form>

                {/* Register Link */}
                <p className="text-center mt-8 font-semibold text-gray-600">
                    Dont Have An Account ?{" "}
                    <Link href="/register" className="text-[#F75B5F] hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;