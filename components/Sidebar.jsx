import Image from "next/image";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
import SideMenu from "./SideMenu";

const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

const Sidebar = () => {
  return (
    <div className="sticky top-0 p-6 h-screen  ">
        <div className="flex  gap-5 border-b p-2">
            <Image 
             src='/assets/profile.webp'
             alt='profile image'
             width={40}
             height={40}
             className="rounded-full object-fill"
            />
            <div>
                <p>User</p>
                <p className="text-xs text-soft">Admin</p>
            </div>
        </div>
       <div className="mt-5  flex flex-col gap-3 p-2">

        {
            menuItems.map((item) => (
                <ul key={item.title} >
                    <li >{item.title}</li>
                   <SideMenu item={item.list} />
                </ul>
            ))
        }
        <div className="px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-slate-700 hover:cursor-pointer">
        <MdLogout />
        LogOut

        </div>
       </div>
       
    </div>
   
  )
}

export default Sidebar