import React from 'react'

const page = () => {
  return (
    <div className='w-screen  flex justify-center mt-40' >
       <div className='softbg rounded-xl w-1/3 p-8'>
       <h1 className='text-2xl text-center mb-6' >Login</h1>
        <form className='flex flex-col gap-3'>
        <input className=' darkbg p-4 rounded-md mb-5 border border-gray-500' type='text' placeholder='username' />
        <input className=' darkbg p-4 rounded-md mb-5 border border-gray-500' type='password' placeholder='password' />
        <button className="  uppercase tracking-wider items-center rounded-lg p-3 bg-gradient-to-r from-cyan-800 to-cyan-950
        transition-transform transform
       duration-200 ease-in-out hover:scale-105 shadow-lg">Login</button>
        </form>
       </div>
       
    </div>
  )
}

export default page