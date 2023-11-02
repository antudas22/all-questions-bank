"use client"

import createJWT from '@/utils/createJWT';
import { AuthContext } from '../../providers/AuthProvider';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from 'next/navigation';

const LoginForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const {signIn, googleLogin} = useContext(AuthContext);
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();

    // Login Handler
    const handleLogin = async (data) => {
      const {email, password} = data;
      const toastId = toast.loading("Loading...");
      try{
        await signIn(email, password);
      await createJWT({ email });
        toast.dismiss(toastId);
        toast.success("Successfully Signed In");
        replace(from);
      }
      catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || 'Something went wrong!');
      }
    }

    // Google Login Handler

    const handleGoogleLogin = async () => {
      const toastId = toast.loading("Loading...");
      try {
        const {user} = await googleLogin();
        await createJWT({email: user.email});
        toast.dismiss(toastId);
        toast.success('Successfully Signed In')
        replace(from);
      }
      catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || 'Something went wrong!');
      }
    }

    return (
        <div>
            <div className="w-80 my-10 border-2 border-rose-600 p-5 rounded-lg">
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

        <p className="text-center my-7">New to AQB? <Link className="text-rose-600" href='/register' >Register Now</Link></p>

        <div className="w-full h-[2px] bg-rose-600 rounded-full"></div>

        <p className="text-center my-3">Continue With</p>

        <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 py-2 text-sm border-2 border-rose-600 text-rose-600 uppercase rounded-md hover:rounded-full w-full cursor-pointer"><FcGoogle className="text-3xl" /> Google </button>

        </form>
      </div>
        </div>
    );
};

export default LoginForm;