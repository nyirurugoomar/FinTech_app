import React from 'react'
import login_bg from '../assets/side_login_image.png'

function Login() {
  return (
    <>
       <div className='grid grid-cols-1 sm:grid-cols-2     '>
        <div className='hidden sm:block bg-orange'>
            <img className='w-full h-full object-cover' src={login_bg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                {/* <h2 className='text-4xl font-bold text-center py-6'>BRAND.</h2> */}
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='rounded-lg w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white bg-black hover:bg-orange font-bold'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
    </>
  ) 
}

export default Login