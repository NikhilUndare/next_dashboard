import Link from 'next/link'
import SearchBar from '../../../components/SearchBar'
import Pagination from '../../../components/Pagination'
import Image from 'next/image'

const page = () => {
  return (
    <div className='p-4 softbg mt-5 rounded-md'>
    <div className='flex justify-between items-center' >
        <SearchBar placeholder="Search for product..." />
        <Link href='/dashboard/products/new-product'>
            <button className=" rounded-lg p-2 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg">
                Add Product
            </button>
        </Link>
    </div>
    <div className='mt-5 border-t '>
        <table className=' mt-5 w-[100%] ' >
            <thead >
                <tr  >
                    <td className='py-4' >Title</td>
                    <td >Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr   >
                    <td >
                        <div className='flex gap-3 items-center'>
                            <Image src='/assets/demo1.jpg'
                                alt='profile img'
                                width={30}
                                height={30}
                                className='rounded-full object-contain' />
                            Iphone
                        </div>
                    </td>
                    <td >Demo description</td>
                    <td >₹ 54,000</td>
                    <td >23/02/2024</td>
                    <td >11</td>
                    <td className=' flex space-x-4 items-center' >
                        <Link href='/dashboard/products/product123'><button className='py-1 px-2 text-sm bg-blue-600 rounded-md hover:bg-blue-800'>view</button></Link>
                        <Link href='/' > <button className='py-1 px-2 text-sm bg-red-500 rounded-md hover:bg-red-700'>delete</button></Link>   
                    </td>
                </tr>
                
            </tbody>
        </table>
        <Pagination />
    </div>

</div>
  )
}

export default page