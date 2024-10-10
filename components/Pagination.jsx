"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Pagination = ({count}) => {
  const pathname = usePathname();
  const SearchParams = useSearchParams();
  const {replace} = useRouter();
  const params = new URLSearchParams(SearchParams);

  const page = SearchParams.get("page") || 1;
  const ItemsPerPage = 5;

  const hasPrev = ItemsPerPage * (parseInt(page) - 1) > 0;
  const hasNext = ItemsPerPage * (parseInt(page) - 1) + ItemsPerPage < count;

  const handlePageChange = (type) => {
     type === "prev" ? params.set("page" ,parseInt(page) - 1) : params.set("page" ,parseInt(page) + 1);
     replace(`${pathname}?${params}`)
  }

  return (
    <div >
        <div className='mt-10 flex justify-between items-center'>

            <button disabled={!hasPrev} onClick={() => handlePageChange("prev")} className="text-black  disabled:opacity-20 rounded-lg py-1 px-2 bg-white transition-transform transform duration-100 ease-in-out hover:scale-105 ">
              Previous
            </button>
            <button disabled={!hasNext} onClick={() => handlePageChange("next")} className="text-black  disabled:opacity-20 rounded-lg py-1 px-2 bg-white transition-transform transform duration-100 ease-in-out hover:scale-105 ">
             Next
            </button>
        </div>
    </div>
  )
}

export default Pagination
