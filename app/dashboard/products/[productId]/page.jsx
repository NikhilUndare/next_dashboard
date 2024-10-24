import Image from 'next/image'
import React from 'react'
import { fetchSingleProduct } from '../../../lib/actions/product.actions';
import { updateProduct } from '../../../lib/actions/serverActions';

const page = async ({params}) => {
   const {productId} = params;
   //console.log(productId);
   const product = await fetchSingleProduct(productId);


    return (
        <div className=' mt-5    flex gap-10'>
            <div className='w-2/5 rounded-md softbg flex flex-col items-center  h-1/3 p-4'>
                <div>
                    <Image src={product.img || `/assets/demo1.jpg`}
                        alt='user image'
                        width={250}
                        height={250}
                        className='rounded-lg' />
                </div>
                <p className='text-xl mt-5'>{product.title}</p>
            </div>
            <div className='flex  rounded-md px-8 py-4 flex-col softbg gap-4 w-full'>
                <form action={updateProduct}>
                    <input type='hidden' name='id' value={product.id} />
                    <div className='flex flex-col  gap-2' >
                        <label>Title</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='title' placeholder={product.title} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Price</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='price' placeholder={product.price} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>stock</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='stock' placeholder={product.stock} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Color</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='color' placeholder={product.color} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Size</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='size' placeholder={product.size} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Description</label>
                        <textarea
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='description' id='description' placeholder={product.description} />
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