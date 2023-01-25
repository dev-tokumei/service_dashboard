import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoneyOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="w-[60px] flex flex-col  overflow-auto h-screen justify-between border-right fixed bg_color">
      <div className="h-[550px] flex flex-col justify-between">
        <img className="mt-2 cursor-pointer" src={logo} alt="logo" />
        <div className="place-self-center h-[40px]">
          <Link to="/task">
            <IconButton style={{ color: "white" }}>
              <CheckCircleOutlineOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/order">
            <IconButton style={{ color: "white" }}>
              <MoveToInboxOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/cashbox">
            <IconButton style={{ color: "white" }}>
              <AttachMoneyIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/users">
            <IconButton style={{ color: "white" }}>
              <PeopleOutlineOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/inventory">
            <IconButton style={{ color: "white" }}>
              <ViewCompactOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/market">
            <IconButton style={{ color: "white" }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/report">
            <IconButton style={{ color: "white" }}>
              <AssessmentOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/tender">
            <IconButton style={{ color: "white" }}>
              <WhatshotOutlinedIcon />
            </IconButton>
          </Link>
        </div>
        <div className="place-self-center h-[40px]">
          <Link to="/setting">
            <IconButton style={{ color: "white" }}>
              <SettingsOutlinedIcon />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className="place-self-center mb-8 h-[40px]">
        <Link to="/help">
          <IconButton style={{ color: "white" }}>
            <HelpOutlineOutlinedIcon />
          </IconButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
