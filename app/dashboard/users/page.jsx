import Link from 'next/link'
import { fetchUsers, fetchUsersCount } from '../../lib/actions/user.actions'
import SearchBar from '../../../components/SearchBar'
import Pagination from '../../../components/Pagination'
import Image from 'next/image'
import {deleteUser} from'../../lib/actions/serverActions'


const page = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const users = await fetchUsers(q, page);
    const count = await fetchUsersCount(q);

    //console.log(users)
    return (
        <div className='p-4 softbg mt-5 rounded-md'>
            <div className='flex justify-between items-center' >
                <SearchBar placeholder="Search for user..." />
                <Link href='/dashboard/users/new-user'>
                    <button className=" rounded-lg p-2 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg">
                        Add User
                    </button>
                </Link>
            </div>
            <div className='mt-5 border-t '>
                <table className=' mt-5 w-[100%] ' >
                    <thead >

                        <tr>
                            <td className='py-4' >Name</td>
                            <td >Email</td>
                            <td>Created At</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length == 0 && <p className=' mt-10 text-2xl tracking-wider '>No User Found!</p>
                        }
                        {users.map((user) => (

                            <tr key={user._id}  >
                                <td  >
                                    <div className='flex gap-3 items-center'>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                            <Image
                                                src={user.img || '/assets/demo1.jpg'}
                                                alt='profile img'
                                                width={30}
                                                height={30}
                                                className='object-cover'
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                        </div>
                                        {user.username}
                                    </div>
                                </td>
                                <td className='p-4' >{user.email}</td>
                                <td >{user.createdAt?.toString().slice(4, 16)}</td>
                                <td >{user.isAdmin ? "Admin" : "Client"}</td>
                                <td >{user.isActive ? "Active" : "Passive"}</td>
                                <td className=' flex space-x-4 items-center mt-3' >
                                    <Link href={`/dashboard/users/${user.id}`}><button className='py-1 px-2 text-sm bg-blue-600 rounded-md hover:bg-blue-800'>view</button></Link>
                                    <form action={deleteUser}>
                                        <input type='hidden' name="id" value={user.id}/>
                                      <button className='py-1 px-2 text-sm bg-red-500 rounded-md hover:bg-red-700'>delete</button>
                                    </form>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <Pagination count={count} />
            </div>

        </div>
    )
}

export default page