import React from "react";
import { useDispatch } from "react-redux";
import { onClose } from "../../store/slices/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="w-full bg-black h-full bg-opacity-50 flex justify-center items-center"
      onClick={() => dispatch(onClose())}
    >
      {children}
    </div>
  );
};

export default Modal;
