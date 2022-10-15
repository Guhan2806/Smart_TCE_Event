import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div>
      <div className="absolute left-[500px] w-[300px] mt-[30px]">
        <AiOutlineSearch className="h-[50px] w-[50px] p-[4px] absolute box-border border-[4px] top-[50%]  translate-y-[-50%]" />
        <input
          className="h-[50px] box-border pl-[60px] w-[400px]"
          type="text"
          placeholder="Type to Search"
        />
      </div>
    </div>
  );
}

export default Search;
