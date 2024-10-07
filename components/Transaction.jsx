import Image from 'next/image'
import React from 'react'



const Transaction = () => {
  return (
    <div className='softbg rounded-md p-4'>
      <div>
        <h1 className='px-2 text-xl font-light text-slate-400'>Latest Transactions</h1>
      </div>
      <div className='px-4 py-2'>
        <table className='w-full'>
          <thead   >
            <tr  >
              <td className='p-2 py-4' >Name</td>
              <td  className='p-2'>Status</td>
              <td className='p-2'>Date</td>
              <td  className='p-2'>Amount</td>
            </tr>
          </thead>
          <tbody>
             <tr>
              <td className='flex gap-2 items-center '>
                 <Image src='/assets/demo1.jpg'
                 alt='profile img'
                 width={30}
                 height={30}
                 className='rounded-full object-contain' />
                 John Doe
              </td>
              <td className='p-2 text-yellow-500'>Pending</td>
              <td className='p-2'>13.02.2024</td>
              <td className='p-2'>₹ 8,700</td>
             </tr >
             <tr>
              <td className='flex gap-2 items-center '>
                 <Image src='/assets/demo1.jpg'
                 alt='profile img'
                 width={30}
                 height={30}
                 className='rounded-full object-contain' />
                 John Doe
              </td>
              <td className='p-2 text-green-500  '>Done</td>
              <td className='p-2'>13.02.2024</td>
              <td className='p-2'>₹ 8,700</td>
             </tr >
             <tr>
              <td className='flex gap-2 items-center '>
                 <Image src='/assets/demo1.jpg'
                 alt='profile img'
                 width={30}
                 height={30}
                 className='rounded-full object-contain' />
                 John Doe
              </td>
              <td className='p-2 text-red-500'>Cancelled</td>
              <td className='p-2'>13.02.2024</td>
              <td className='p-2'>₹ 8,700</td>
             </tr >
             <tr>
              <td className='flex gap-2 items-center '>
                 <Image src='/assets/demo1.jpg'
                 alt='profile img'
                 width={30}
                 height={30}
                 className='rounded-full object-contain' />
                 John Doe
              </td>
              <td className='p-2  text-yellow-500'>Pending</td>
              <td className='p-2'>13.02.2024</td>
              <td className='p-2'>₹ 8,700</td>
             </tr >
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transaction