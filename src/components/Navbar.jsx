import React from "react";
import logo from "../assets/logo.png";
import money from "../assets/icons/money.svg";
import users from "../assets/icons/users.svg";
import poll from "../assets/icons/poll.svg";
import cart from "../assets/icons/shopping.svg";
import inbox from "../assets/icons/move-to-inbox.svg";
import announcement from "../assets/icons/announcement.png";
import setting from "../assets/icons/setting.svg";
import help from "../assets/icons/help.svg";
import todo from "../assets/icons/todo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[70px] flex flex-col  overflow-auto h-screen justify-between border-r-[1px] border-slate-400 bg-slate-200 fixed">
      <img src={logo} alt="logo" />
      <div className="place-self-center ">
        <Link to="/order">
          <img className="w-[26px]" src={inbox} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center ">
        <Link to="todo">
          <img className="w-[26px]" src={todo} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center">
        <Link to="cashbox">
          <img className="w-[30px]" src={money} alt="каринка" />
        </Link>
      </div>

      <div className="place-self-center">
        <Link to="users">
          <img className="w-[26px]" src={users} alt="каринка" />
        </Link>
      </div>

      <div className="place-self-center">
        <Link to="market">
          <img className="w-28px]" src={cart} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center">
        <Link to="repost">
          <img className="w-[26px]" src={poll} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center">
        <Link to="tender">
          <img className="w-[26px]" src={announcement} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center">
        <Link to="setting">
          <img className="w-[26px]" src={setting} alt="каринка" />
        </Link>
      </div>
      <div className="place-self-center mb-4">
        <Link to="help">
          <img className="w-[26px]" src={help} alt="каринка" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
