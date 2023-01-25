import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllOrder from "./components/AllOrder";
import Cashbox from "./components/Cashbox";
import Header from "./components/Header";
import Help from "./components/Help";
import Market from "./components/Market";
import Navbar from "./components/Navbar";
import Report from "./components/Report";
import Setting from "./components/Setting";
import Tender from "./components/Tender";
import Todo from "./components/Todo";
import Users from "./components/Users";
import Invertory from "./components/Invertory";

const App = () => {
  return (
    <div className="App bg_color container mx-auto">
      <Router>
        <Navbar />
        <div className="w-[95%] ml-[70px] bg_color">
          <Routes>
            <Route path="/order" element={<AllOrder />} />
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
      </Router>
    </div>
  );
};

export default App;
