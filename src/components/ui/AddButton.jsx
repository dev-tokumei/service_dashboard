import React, { useState } from "react";
import { onOpen } from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux";

const AddButton = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(onOpen(true));
  };
  return (
    <div
      className="w-[56px] h-[56px] rounded-full bg-gradient-to-b from-teal-300 to-teal-500 hover:from-teal-300 hover:to-teal-400 bottom-[15px] select-none right-[10px] fixed text-black font-bold text-[25px] z-[3px] place-items-center grid pb-1"
      onClick={handleOpen}
    >
      +
    </div>
  );
};

export default AddButton;
