import React from "react";
import UserNavbar from "./components/UserNavbar";
import GuestNavbar from "./components/GuestNavbar";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GuestNavbar />
      {/* <UserNavbar /> */}
      <LoginPage/>
    </>
  );
};

export default App;
