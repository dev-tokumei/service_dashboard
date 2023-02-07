import React from "react";
import EmptyPage from "../../pages/EmptyPage";
import AppBar from "../Appbar/AppBar";
import Header from "../Header/Header";

const AllOrder = () => {
  return (
    <div className="w-full p2">
      <Header>Заказы</Header>
      <AppBar />
      <EmptyPage />
    </div>
  );
};

export default AllOrder;
