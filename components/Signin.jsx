// import React from 'react'
import {useForm} from "react-hook-form"
import Logo from './Logo';
import Input from './Input';
// import Link from "react-dom"
import "./signup.css"

 const Signin = () => {
    const{register , handleSubmit} = useForm();
    const create = (data) =>{
        console.log(data);
    }

  return (
    <div className="flex items-center justify-center mb-4">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
   

        <form onSubmit={handleSubmit(create)}>
        <div className='space-y-5'>
            <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
                required: true,
            })}
            />
            <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
                required: true,
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
            })}
            />
            <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
                required: true,})}
            />
            <button type="submit" className="w-full bg-orange-500">
                Create Account
            </button>
        </div>
    </form>

    </div>

</div>
  )
}

export default Signin;