import { IconButton, Modal } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { onClose, onOpen } from "../../store/slices/modalSlice";
import CloseIcon from "@mui/icons-material/Close";

const OrderModal = ({ onOpen }) => {
  const dispatch = useDispatch();
  return (
    <Modal open={onOpen} onClose={() => dispatch(onClose())}>
      <IconButton sx={{ color: "white" }}>
        <CloseIcon />
      </IconButton>
    </Modal>
  );
};

export default OrderModal;
