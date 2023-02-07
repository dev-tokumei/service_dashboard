import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";

const SearchInput = () => {
  return (
    <div className="w-full h-[35px] flex items-center focus:outline-none border-slate-300 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border pl-2 rounded-[20px]">
      <IconButton style={{ color: "white" }}>
        <SearchOutlinedIcon />
      </IconButton>

      <input
        className="w-[360px] h-full focus:outline-none bg_color rounded-2xl pl-1"
        placeholder="Поиск"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
