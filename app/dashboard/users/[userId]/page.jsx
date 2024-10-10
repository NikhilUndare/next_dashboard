import Image from 'next/image'
import { fetchSingleUser } from '../../../lib/actions/user.actions'

const page = ({params}) => {
    const {userId} = params;
    console.log(userId);
    const user = fetchSingleUser(userId)
   // console.log(user)
    return (
        <div className=' mt-5    flex gap-10'>
            <div className='w-2/5 rounded-md softbg flex flex-col items-center  h-1/3 p-4'>
                <div>
                    <Image src={user.img ||'/assets/demo1.jpg'}
                        alt='user image'
                        width={250}
                        height={250}
                        className='rounded-lg' />
                </div>
                <p className='text-xl mt-5'>{user.username}</p>
            </div>
            <div className='flex rounded-md px-8 py-4 flex-col softbg gap-4 w-full'>
                <form>
                    <div className='flex flex-col gap-2' >
                        <label>Username</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='username' placeholder='john Doe' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='email' name='email' placeholder='johnDoe@gmail.com' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>PassWord</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='password' name='password'  />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Phone</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='phone' placeholder='9876543210' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Address</label>
                        <textarea
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='address' id='address' placeholder='silicon valley last lane.' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Is Admin ?</label>
                        <select
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='isAdmin' id='isAdmin'>
                            <option value={true}> Yes</option>
                            <option value={false}> No</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Is Active ?</label>
                        <select
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='isActive' id='isActive'>
                            <option value={true}> Yes</option>
                            <option value={false}> No</option>
                        </select>
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