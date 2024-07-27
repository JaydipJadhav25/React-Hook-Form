import React from 'react'
import {useForm} from "react-hook-form"

import Input from './Input';

const Login = () => {
    const{register , handleSubmit} = useForm();
  return (
    <div className='bg-lime-600'>
       
       <form >
                 
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
       placeholder="Enter your password"
       type="password"
       {...register("password")}
        />
        <button
        className='w-full'
        >Submit</button>
       </form>

    </div>
  )
}

export default Login