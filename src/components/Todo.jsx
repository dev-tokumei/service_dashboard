import { Button } from "@mui/material";
import React from "react";
import SearchInput from "../components/ui/SearchInput";
import Header from "./Header";

const Todo = () => {
  return (
    <div className="w-full">
      <Header>Задачи</Header>
      <nav className="flex w-full justify-between items-center p-2 h-[52px]">
        <div className="w-[500px] flex justify-between">
          <button className="w-[143px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800">
            Я исполнитель
          </button>
          <button className="w-[73px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800">
            Я автор
          </button>
          <button className="w-[117px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800">
            Выполненные
          </button>
          <button className="w-[108px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800">
            Просрочены
          </button>
          <button className="w-[46px] text-[14px] font-bold hover:border-b-2 border-teal-800 hover:text-teal-800">
            Все
          </button>
        </div>
        <div className="w-[900px]">
          <SearchInput />
        </div>
      </nav>
      <div className="w-full h-[60px] p-2 text-[1.25rem] border-b border-gray-600 text-blue-400 font-medium">Просрочены</div>
    </div>
  );
};

export default Todo;
