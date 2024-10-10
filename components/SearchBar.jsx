"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ placeholder }) => {
    const pathname = usePathname();
    const SearchParams = useSearchParams();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(SearchParams);
      params.set("page" , 1)
      if(e.target.value){
          params.set("q" ,e.target.value );
      }else{
        params.delete("q")
      }
      replace(`${pathname}?${params}`)
    },500)
    return (
        <div className="flex items-center gap-2 p-2 rounded-xl  bg-slate-700">
            <MdSearch />
            <input onChange={handleSearch} type="text" placeholder={placeholder} className="bg-transparent  outline-none" />
        </div>
    )
}

export default SearchBar