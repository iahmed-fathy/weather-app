import React from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Search from "./Search";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <Dropdown />
      </div>
      <h1 className="text-center w-full my-10 text-[40px] font-bold">
        How`s the sky looking today?
      </h1>
      <Search />
    </header>
  );
}
