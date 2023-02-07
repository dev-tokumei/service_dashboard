import React from "react";
import eptyImg from '../assets/img/empty.png'


const EmptyPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <img className="w-[300px] h-[247px]" src={eptyImg} alt="" />
        <p className="font-bold text-white text-[20px] text-center">Здесь пока пусто</p>
      </div>
    </div>
  );
};

export default EmptyPage;
