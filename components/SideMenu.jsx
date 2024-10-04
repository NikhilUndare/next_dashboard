


const SideMenu = ({ item }) => {
    return (
        <div >
            {item.map((i) => (
                <div className='mt-1 px-4 py-2 flex gap-4 items-center rounded-lg hover:bg-slate-700 ' key={i.title}>
                    {i.icon}
                    <li  >{i.title}</li>
                   
                </div>

            ))}

        </div>
    )
}

export default SideMenu