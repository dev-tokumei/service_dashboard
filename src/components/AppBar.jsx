import React from "react";
import { Link } from "react-router-dom";
import editing from "../assets/icons/editing.png";
import sort from "../assets/icons/sort.png";
import SearchInput from "./ui/SearchInput";

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
    <div className="w-full flex h-[50px] ">
      <ul className="w-full flex justify-around items-center">
        {Links.map((lnk) => (
          <li key={lnk.name}>
            <Link className="text-[17px] text-slate-500" href={lnk.link}>
              {lnk.name}
            </Link>
          </li>
        ))}
        <SearchInput />
        <button>
          <img className="w-[24px] h-[24px]" src={editing} alt="edit" />
        </button>
        <button>
          <img className="w-[24px] h-[24px]" src={sort} alt="sort" />
        </button>
      </ul>
    </div>
  );
};

export default AppBar;
