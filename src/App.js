import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Cashbox from "./components/Cashbox/Cashbox";
import Help from "./components/Help/Help";
import Market from "./components/Market/Market";
import Navbar from "./components/Navbar/Navbar";
import Report from "./components/Report/Report";
import Setting from "./components/Settings/Setting";
import Tender from "./components/Tender/Tender";
import Todo from "./components/Todo/Todo";
import Users from "./components/Users/Users";
import Invertory from "./components/Inventory/Invertory";

const App = () => {
  return (
    <Router>
      <div className="container bg_color w-full ">
        <Navbar />
        <div className="w-[95%] ml-[70px] bg_color">
          <Routes>
            <Route path="/order" element={<Orders />} />
            <Route path="/task" element={<Todo />} />
            <Route path="/cashbox" element={<Cashbox />} />
            <Route path="/users" element={<Users />} />
            <Route path="/inventory" element={<Invertory />} />
            <Route path="/market" element={<Market />} />
            <Route path="/report" element={<Report />} />
            <Route path="/tender" element={<Tender />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
