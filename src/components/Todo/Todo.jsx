import React from "react";
import SearchInput from "../ui/SearchInput";
import Header from "../Header/Header";
import AddButton from "../ui/AddButton";
import EmptyPage from "../../pages/EmptyPage";
import { onOpen } from "../../store/slices/modalSlice";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../ui/Modal";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { onClose } from "../../store/slices/modalSlice";

const Todo = () => {
  const { isModal } = useSelector((state) => state.isModal);
  const dispatch = useDispatch();

  return (
    <aside className="w-full">
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
      <div className="w-full h-[60px] p-2 text-[1.25rem] border-b border-gray-600 text-blue-400 font-medium">
        Просрочены
      </div>
      {/* <Dialog open={isModal} onClose={onClose}>
        <DialogTitle>Hello</DialogTitle>
        <div>hello</div>
        <DialogActions>
          <Button onClick={()=> dispatch(onClose())}>Отмена</Button>
        </DialogActions>
      </Dialog> */}
      <AddButton setModal={onOpen} />
      {isModal && <TodoModal onOpen={isModal} />}
      <EmptyPage />
    </aside>
  );
};

export default Todo;
