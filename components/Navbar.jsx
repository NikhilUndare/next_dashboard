"use client";
import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {

  const pathname =usePathname().split().pop();
  return (
   <div className="softbg p-4 rounded-md flex justify-between items-center">
     <div className="capitalize font-light text-lg tracking-wide">
       {pathname.split("/").pop()}
     </div>
     <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 py-1 px-2 rounded-xl  bg-slate-700">
          <MdSearch />
          <input type="text" placeholder="Search..." className= "bg-transparent  outline-none" />
        </div>
        <div className="flex gap-3">
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
     </div>
   </div>
  )
}

export default Navbar