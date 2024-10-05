"use client"

import { usePathname } from "next/navigation"


const SideMenu = ({ item }) => {

    const pathname = usePathname();
    return (
        <div >

            {item.map((i) => {
               const isActive = pathname == i.path
             return ( <div key={i.title} className={`${isActive && 'bg-slate-700'} mt-1 px-4 py-2 flex gap-4 items-center rounded-lg hover:bg-slate-700 `} >
                    {i.icon}
                    <li  >{i.title}</li>
                   
                </div> )

            })}

        </div>
    )
}

export default SideMenu