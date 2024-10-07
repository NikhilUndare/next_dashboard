"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"


const SideMenu = ({ item }) => {

    const pathname = usePathname();
    return (
        <div >

            {item.map((i) => {
               const isActive = pathname == i.path
             return ( 
             <Link href={`${i.path}`}>
               <div key={i.title} className={`${isActive && 'bg-slate-700'} mt-1 px-4 py-2 flex gap-4 hover:cursor-pointer items-center rounded-lg hover:bg-slate-700 `} >
                    {i.icon}
                    <li  >{i.title}</li>
                   
                </div>
             </Link>  )

            })}

        </div>
    )
}

export default SideMenu