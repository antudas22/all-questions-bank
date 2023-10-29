"use client"

import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    // Login Handler
    const handleLogin = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    //   signIn(email, password)
    //   .then(result => {
    //     const user = result.user;
    //     console.log(user);
    //   })
    //   .catch(error => console.error(error));
    }

    // Password hide/show handler

    return (
        <div>
            <div className="w-80 my-10 lg:mt-20">
        <h2 className="text-3xl text-center md:text-5xl lg:text-5xl font-bold text-rose-600 mb-8">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

        <input name="email" {...register("email", {
          required: "Email is required!"
          })} type="email" placeholder="Your Email Address" className="input input-bordered input-error w-full mb-2" />

        <div className="form-control w-full max-w-sm relative">
        <input name="password" {...register("password", {
          required: "Password is required!",
          minLength: {value: 8, message: 'Password should be minimum 8 characters'}
        })} type='password' placeholder="Your Password" className="input input-bordered input-error w-full" />
        </div>

        <p className="text-rose-600 mt-1">Forget Password?</p>

        {
          errors.email &&
          <p className="mt-1 text-error text-end">{errors.email?.message}</p>
        }
        {
          errors.password &&
          <p className="mt-1 text-error text-end">{errors.password?.message}</p>
        }

        <input type="submit" value="Login" className="py-3 text-sm bg-rose-600 text-white uppercase rounded-md hover:rounded-full w-full cursor-pointer mt-5" />

        <p className="text-center my-7">New to Repair Station? <Link className="text-rose-600" href='/register' >Register Now</Link></p>

        <div className="w-full h-[2px] bg-rose-600 rounded-full"></div>

        <button className="py-3 text-sm border-2 border-rose-600 text-rose-600 uppercase rounded-md hover:rounded-full w-full cursor-pointer mt-7">Continue With Google</button>

        </form>
      </div>
        </div>
    );
};

export default LoginForm;