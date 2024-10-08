import React from 'react'

const page = () => {
    return (
        <div className='px-4 py-8 softbg mt-5 rounded-md'>
            <form className='flex flex-wrap justify-between'>
                <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='text' placeholder='Username' name='username' required />
                <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='email' placeholder='Email' name='email' required />
                <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='password' placeholder='Password' name='password' required />
                <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='number' placeholder='Phone' name='phone'  />
                <select className='darkbg text-white w-2/5 p-3 rounded-lg mb-5 border border-gray-500' name='isAdmin' id='isAdmin'>
                    <option className='text-gray-300' value={false} selected>Is Admin ?</option>
                    <option className='text-gray-300' value={true}>Yes</option>
                    <option className='text-gray-300' value={false}>No</option>  
                </select>
                <select className='darkbg text-white w-2/5 p-3 rounded-lg mb-5 border border-gray-500' name='isActive' id='isActive'>
                    <option className='text-gray-300' value={true} selected>Is Active ?</option>
                    <option className='text-gray-300' value={true}>Yes</option>
                    <option className='text-gray-300'value={false}>No</option>  
                </select>
                <textarea className='w-full darkbg p-3 rounded-md mb-5 border border-gray-500' placeholder='Address' name='address' id='address' rows='5' required ></textarea>

                <button className=" w-1/3 mx-auto uppercase tracking-wider items-center rounded-lg p-3 bg-gradient-to-r from-cyan-800 to-cyan-950
        transition-transform transform
       duration-200 ease-in-out hover:scale-105 shadow-lg" type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default page