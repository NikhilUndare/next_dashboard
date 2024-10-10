import Link from 'next/link'
import SearchBar from '../../../components/SearchBar'
import Pagination from '../../../components/Pagination'
import Image from 'next/image'
import { fetchProducts, fetchProductsCount } from '../../lib/actions/product.actions'
import {deleteProduct} from'../../lib/actions/serverActions'

const page = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const products = await fetchProducts(q,page);
    const count = await fetchProductsCount(q);
   // console.log(count);
    // console.log(products)

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
                {
                   products.length == 0 && <p className=' mt-10 text-2xl tracking-wider '>No Product Found!</p>
                }
                {
                 products.map((product) => (

                     <tr key={product.id}  >
                    <td >
                    <div className='flex gap-3 items-center'>
                      <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <Image
                           src={product.img || '/assets/demo1.jpg'}
                             alt='profile img'
                             width={30}
                             height={30}
                             className='object-cover'
                             style={{ width: '100%', height: '100%' }}
                             />
                            </div>
                            {product.title}
                      </div>
                    </td>
                    <td className='p-4'>{product.description}</td>
                    <td >₹ {product.price}</td>
                    <td >{product.createdAt?.toString().slice(4,16)}</td>
                    <td >{product.stock}</td>
                    <td className=' flex space-x-4 items-center mt-3' >
                        <Link href={`/dashboard/products/${product.id}`}><button className='py-1 px-2 text-sm bg-blue-600 rounded-md hover:bg-blue-800'>view</button></Link>
                        <form action={deleteProduct}>
                            <input type='hidden' name="id" value={product.id} />
                        <button className='py-1 px-2 text-sm bg-red-500 rounded-md hover:bg-red-700'>delete</button>  
                        </form>
                    </td>
                </tr>
               ))   
             }
                
            </tbody>
        </table>
        <Pagination count={count} />
    </div>

</div>
  )
}

export default page