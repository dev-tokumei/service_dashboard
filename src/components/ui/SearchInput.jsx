import React from "react";
import search from "../../assets/icons/search.png";

const SearchInput = () => {
  return (
    <div className="w-[420px] h-[35px] flex focus:outline-none border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border pl-2 rounded-[20px]">
      <img className="w-[32px] h-[32px] p-1" src={search} alt="serch" />
      <input
        className="w-[360px] h-full focus:outline-none"
        placeholder="Поиск"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
