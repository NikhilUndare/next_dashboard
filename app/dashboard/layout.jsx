import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex'>
        <div className=' softbg w-1/4'>
            <Sidebar />
        </div>
        <div className='bg-slate-300 w-full'>
         <Navbar />
        {children}
        </div>
    </div>
  )
}

export default layout