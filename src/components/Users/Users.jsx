import React, { useState, useEffect } from "react";
import EmptyPage from "../../pages/EmptyPage";
import Header from "../Header/Header";
import SearchInput from "../ui/SearchInput";

const Users = () => {
  return (
    <div>
      <Header>Клиенты</Header>
      <SearchInput/>
      <EmptyPage />
    </div>
  );
};

export default Users;
