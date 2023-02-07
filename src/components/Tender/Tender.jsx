import React from "react";
import EmptyPage from "../../pages/EmptyPage";
import Header from "../Header/Header";
import SearchInput from "../ui/SearchInput";

const Tender = () => {
  return (
    <div className="p-1 w-full h-full">
      <Header>Объявление</Header>
      <SearchInput />
      <EmptyPage />
    </div>
  );
};

export default Tender;
