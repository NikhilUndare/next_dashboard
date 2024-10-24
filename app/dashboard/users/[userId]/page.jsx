import Image from 'next/image'
import { fetchSingleUser } from '../../../lib/actions/user.actions'
import { updateUser } from '../../../lib/actions/serverActions';

const page = async({params}) => {
    const {userId} = params;
    //console.log(userId);
    const user = await fetchSingleUser(userId)
    //console.log(user)
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
                <form action={updateUser}>
                    <input type='hidden' name='id'value={user.id} />
                    <div className='flex flex-col gap-2' >
                        <label>Username</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='text' name='username' placeholder={user.username} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='email' name='email' placeholder={user.email} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Password</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='password' name='password'  />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Phone</label>
                        <input
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            type='number' name='phone' placeholder={user.phone} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Address</label>
                        <textarea
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='address' id='address' placeholder={user.address} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Is Admin ?</label>
                        <select
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='isAdmin' id='isAdmin'>
                            <option value={true} selected={user.isAdmin}> Yes</option>
                            <option value={false} selected={!user.isAdmin} > No</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Is Active ?</label>
                        <select
                            className='darkbg text-gray-300 p-2 rounded-lg mb-5 border border-gray-500'
                            name='isActive' id='isActive'>
                            <option value={true} selected={user.isActive}> Yes</option>
                            <option value={false} selected={user.isActive}> No</option>
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