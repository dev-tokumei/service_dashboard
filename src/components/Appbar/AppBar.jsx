import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../ui/SearchInput";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { IconButton } from "@mui/material";

const AppBar = () => {
  const Links = [
    { name: "Все ", link: "/" },
    { name: "Активные ⚡", link: "/" },
    { name: "В работе 🔧", link: "/" },
    { name: "Готовые 🙂", link: "/" },
    { name: "Ждут запчасти 📦", link: "/" },
    { name: "Согласование ⏳", link: "/" },
  ];

  return (
    <div className="w-full flex h-[50px]">
      <ul className="w-full flex justify-around items-center">
        {Links.map((lnk) => (
          <li key={lnk.name}>
            <Link
              className="text-[15px] font-bold text-slate-300"
              href={lnk.link}
            >
              {lnk.name}
            </Link>
          </li>
        ))}
        <div className="w-[420px]">
          <SearchInput />
        </div>

        <IconButton style={{ color: "white" }}>
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "white" }}>
          <PlaylistAddOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "white" }}>
          <FilterListOutlinedIcon />
        </IconButton>
      </ul>
    </div>
  );
};

export default AppBar;
