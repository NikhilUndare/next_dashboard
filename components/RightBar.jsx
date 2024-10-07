import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="relative">
      <div className="fixed px-3 py-4 rounded-xl bg-gradient-to-b from-slate-800 to-cyan-900">
        <div className="absolute right-5 bottom-0">
          <Image src='/assets/astronaut.png'
            alt="astronaut image" height={100} width={100}
            className="opacity-30" />
        </div>
        <div className="flex flex-col gap-3">
          <h1><span>🔥</span>Available Now</h1>
          <h2>How to use the new version of the admin dashboard ?</h2>
          <p className="text-xs">Takes 4 minutes to learn</p>
          <p className="text-xs"> Get started quickly with the updated admin dashboard.
            Learn about the latest features & improved user experience.
          </p>
          <button className="w-24 flex rounded-lg items-center p-2 gap-2 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg">
            <MdPlayCircleFilled />
            <p className="text-sm">Watch</p>
          </button>
        </div>
      </div>
      <div className="fixed bottom-10 px-3 py-4 rounded-xl bg-gradient-to-t from-slate-800 to-cyan-900">
        <div className="flex flex-col gap-3">
          <h1><span>🚀</span>Coming Soon</h1>
          <h2>New server actions are available, Check Out!</h2>
          <p className="text-xs">Boost your productivity</p>
          <p className="text-xs"> Experience enhanced performance and flexibility with the new server actions. 
          Take control of your workflows and streamline operations effortlessly.</p>
          <button className="w-24 flex rounded-lg items-center p-2 gap-2 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg">
            <MdReadMore />
            <p className="text-sm">Learn</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default RightBar