import React from 'react'

const page = () => {
  return (
    <div className='px-4 py-8 softbg mt-5 rounded-md'>
        <form className='flex flex-wrap justify-between'>
          <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='text' placeholder='Title' name='title' required />
          <select className='darkbg text-gray-300 w-2/5 p-3 rounded-lg mb-5 border border-gray-500' name='category' id='category'>
            <option value='general'>Choose a category</option>
            <option value='phone'>Phone</option>
            <option value='computer'>Computer</option>
            <option value='kitchen'>Kitchen</option>
            <option value='electronics'>Electronics</option>
          </select>
          <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='number' placeholder='Price' name='price' required />
          <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='number' placeholder='Stock' name='stock' required />
          <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='text' placeholder='Color' name='color' />
          <input className='w-2/5 darkbg p-3 rounded-md mb-5 border border-gray-500' type='text' placeholder='Size' name='size' />
          <textarea className='w-full darkbg p-3 rounded-md mb-5 border border-gray-500' placeholder='Description' name='desc' id='desc' rows='5' required ></textarea>
          
           <button className=" w-1/3 mx-auto uppercase tracking-wider items-center rounded-lg p-3 bg-gradient-to-r from-cyan-800 to-cyan-950
            transition-transform transform
           duration-200 ease-in-out hover:scale-105 shadow-lg" type='submit'>Submit</button>
          
        </form>
    </div>
  )
}

export default page
