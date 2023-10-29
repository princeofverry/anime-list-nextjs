import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-slate-600">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href='/' className="font-bold text-white text-2xl">WIBUPAGE</Link>
        <input placeholder="cari animek!"/>
      </div>
    </header>
  );
};

export default Navbar;
