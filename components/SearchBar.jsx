import { MdSearch } from "react-icons/md";

const SearchBar = ({ placeholder }) => {
    return (
        <div className="flex items-center gap-2 p-2 rounded-xl  bg-slate-700">
            <MdSearch />
            <input type="text" placeholder={placeholder} className="bg-transparent  outline-none" />
        </div>
    )
}

export default SearchBar