import React from "react";
import bell from "../assets/icons/bell.png";
import user from "../assets/icons/circle-user.svg";
const Header = () => {
  return (
    <div className="w-full flex justify-between h-[60px] items-center pt-3 p-2">
      <h1 className="w-[100px] font-medium text-xl p-5">Заказы</h1>
      <div className="flex w-[250px] h-full justify-between items-center">
        <img className="w-[25px] h-[26px] " src={bell} alt="notification" />
        <p className="text-md ">Smart Client Office</p>
        <img className="w-[32px] h-[32px]" src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
