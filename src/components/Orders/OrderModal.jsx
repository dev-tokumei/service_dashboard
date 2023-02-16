import {
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { onClose, onOpen } from "../../store/slices/modalSlice";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const OrderModal = ({ onOpen }) => {
  const dispatch = useDispatch();
  return (
    <Modal open={onOpen} onClose={() => dispatch(onClose())}>
      <div className="flex justify-center items-start bg_color h-full p-10">
        <div className="w-[960px]">
          <header className="flex w-full justify-between ">
            <div className="flex items-center justify-between w-[500px]">
              <h1 className="font-bold text-2xl mr-2">Заказ</h1>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Платный"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Гарантийный"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Выездной"
              />
            </div>
            <div className="flex items-center">
              <IconButton style={{ color: "white" }}>
                <AttachFileIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                onClick={() => dispatch(onClose())}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </header>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
