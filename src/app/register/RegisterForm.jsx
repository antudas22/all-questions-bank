"use client"

import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';

const RegisterForm = () => {

    const [accepted, setAccepted] = useState(false);
    const {register, formState: {errors}, handleSubmit} = useForm();

    const {createUser, profileUpdate, googleLogin} = useContext(AuthContext);

    // Register Handler
    const handleRegister = async (data) => {
      const {name, email, password} = data;
      const toastId = toast.loading("Loading...");
      try{
        const user = await createUser(email, password);
        await profileUpdate({
          displayName: name
        });
        toast.dismiss(toastId);
        toast.success('Successfully Registered')
      }
      catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || 'Something went wrong!');
      }
    }

    //Google Handler
    const handleGoogleLogin = async () => {
      const toastId = toast.loading("Loading...");
      try {
        const user = await googleLogin();
        toast.dismiss(toastId);
        toast.success('Successfully Signed In')
      }
      catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || 'Something went wrong!');
      }
    }

    // Terms Accept Handler
    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }

    return (

      <div className="w-80 my-10 border-2 border-rose-600 p-5 rounded-lg">
        <h2 className="text-3xl text-center md:text-5xl lg:text-5xl font-bold text-rose-600 mb-8">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>

        <input name="name" {...register("fullName", {required: true})} type="text" placeholder="Your Full Name" className="input input-bordered input-error w-full mb-2" />

        <input name="email" {...register("email", {required: "Email is required!"})} type="email" placeholder="Your Email Address" className="input input-bordered input-error w-full mb-2" />

        <div className="form-control w-full max-w-sm relative">
        <input name="password" {...register("password", {required: "Password is required!"})} type='password' placeholder="Your Password" className="input input-bordered input-error w-full mb-5" />
        
        </div>

        <div className="flex items-center justify-between">
            <p>Accept <Link className="text-rose-600" href="/">Terms & Conditions</Link></p>
            <input onClick={handleAccepted} type="checkbox" className="checkbox" />
        </div>

        {
          errors.email &&
          <p className="mt-1 text-error text-end">{errors.email?.message}</p>
        }
        {
          errors.password &&
          <p className="mt-1 text-error text-end">{errors.password?.message}</p>
        }

        <input type="submit" value="Register" className="btn hover:bg-rose-600 py-3 text-sm bg-rose-600 text-white uppercase rounded-md hover:rounded-full w-full cursor-pointer mt-5" disabled={!accepted} />

        <p className="text-center my-7">Already have an account? <Link className="text-rose-600" href='login' >Please Login</Link></p>

        <div className="w-full h-[2px] bg-rose-600 rounded-full"></div>

        <button onClick={handleGoogleLogin} className="py-3 text-sm border-2 border-rose-600 text-rose-600 uppercase rounded-md hover:rounded-full w-full cursor-pointer mt-7">Continue With Google</button>

        </form>
      </div>
    );
};

export default RegisterForm;