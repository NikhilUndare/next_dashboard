

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'



const layout = ({children}) => {
  return (
    <div className='flex'>
        <div className=' softbg w-1/4'>
         <Sidebar />
        </div>
        <div className='p-8 w-full'>
        <Navbar />
        {children}
        <Footer />
        </div>
    </div>
  )
}

export default layout