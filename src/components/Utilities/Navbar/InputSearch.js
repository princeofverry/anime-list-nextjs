"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){handleSearch(e)}
  }
  const searchRef = useRef();
  const router = useRouter()
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  };
  return (
    <div className="relative">
      <input
        placeholder="cari animek!"
        className="w-full p-2 rounded-md"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
