import Link from 'next/link'


const Pagination = () => {
  return (
    <div >
        <div className='mt-10 flex justify-between items-center'>

        <Link href='/dashboard/users/new-user'>
            <button disabled className="text-black  disabled:opacity-30 rounded-lg py-1 px-2 bg-white transition-transform transform duration-100 ease-in-out hover:scale-105 ">
              Previous
            </button>
         </Link>
         <Link href='/dashboard/users/new-user'>
            <button className="text-black  rounded-lg py-1 px-2 bg-white transition-transform transform duration-100 ease-in-out hover:scale-105 ">
             Next
            </button>
         </Link>
        </div>
    </div>
  )
}

export default Pagination
