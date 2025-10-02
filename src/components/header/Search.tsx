import Image from "next/image";
import React from "react";

export default function Search() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative flex items-center">
        <input
          type="search"
          className=" bg-[var(--base-800)] w-[400px] p-3 pl-14 rounded-[10px] border-[var(--base-800)] border-2 focus:border-black focus:ring-2 ring-white"
          placeholder="Search for a place"
        />
        <Image
          src={"/icons/icon-search.svg"}
          alt={"search icon"}
          width={20}
          height={20}
          className="absolute ml-5 fill-current text-blue-600"
        />
      </div>
      <button className="bg-[var(--blue-500)] cursor-pointer rounded-[10px] py-3 px-4 border-2 border-[var(--blue-500)] focus:border-black focus:ring-2 focus:ring-[var(--blue-500)]">
        Search
      </button>
    </div>
  );
}
