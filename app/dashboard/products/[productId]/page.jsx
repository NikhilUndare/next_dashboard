import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className=' mt-5    flex gap-10'>
            <div className='w-2/5 rounded-md softbg flex flex-col items-center  h-1/3 p-4'>
                <div>
                    <Image src='/assets/demo1.jpg'
                        alt='user image'
                        width={250}
                        height={250}
                        className='rounded-lg' />
                </div>
                <p className='text-xl mt-5'>Iphone</p>
            </div>
            <div className='flex  rounded-md px-8 py-4 flex-col softbg gap-4 w-full'>
                <form>
                    <div className='flex flex-col  gap-2' >
                        <label>Title</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='title' placeholder='Iphone' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Price</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='price' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>stock</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='stock' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Color</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='color' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Size</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='size' />
                    </div>



                    <div className='flex flex-col gap-2'>
                        <label>Category</label>
                        <select
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='category' id='category'>
                            <option value='general'>Choose a category</option>
                            <option value='phone'>Phone</option>
                            <option value='computer'>Computer</option>
                            <option value='kitchen'>Kitchen</option>
                            <option value='electronics'>Electronics</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Description</label>
                        <textarea
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='desc' id='desc' placeholder='demo desc' />
                    </div>

                    <button className=" w-72  uppercase tracking-wider rounded-lg p-3 bg-gradient-to-r from-cyan-800 to-cyan-950
                                      transition-transform transform
                                      duration-200 ease-in-out hover:scale-105 shadow-lg" type='submit'
                    >Update</button>


                </form>


            </div>
        </div>
    )
}

export default page