import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="bg-gray-700 py-2 px-4 rounded-full flex items-center gap-4">
      <Image
        src="/icons/explore.svg"
        alt="search"
        width={16}
        height={16}
        className=""
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-gray-500"
      />
    </div>
  );
};

export default Search;
