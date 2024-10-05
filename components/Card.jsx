import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex w-full gap-4 softbg rounded-lg p-4 hover:bg-slate-700">
      <MdSupervisedUserCircle size={24} />
        <div className="flex flex-col gap-2">
           <p>Total Users</p>
           <p className="text-lg">10,964</p>
           <p className="text-xs tracking-wider"><span className="text-lime-500">12%</span> more than previous week</p>
        </div>
    </div>
  )
}

export default Card