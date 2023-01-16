import React from "react";
import {} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllOrder from "./components/AllOrder";
import AppBar from "./components/AppBar";
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
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="w-[95%] ml-[70px]">
          <Header />
          <AppBar />
          <Routes>
            <Route path="/order" element={<AllOrder />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/cashbox" element={<Cashbox />} />
            <Route path="/users" element={<Users />} />
            <Route path="/market" element={<Market />} />
            <Route path="/repost" element={<Report />} />
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
