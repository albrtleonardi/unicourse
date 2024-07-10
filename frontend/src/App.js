import React from "react";
import UserNavbar from "./components/User/UserNavbar";
import GuestNavbar from "./components/Guest/GuestNavbar";
import LoginPage from "./pages/Universal/LoginPage";
import SignupPage from "./pages/Universal/SignupPage";
import GuestHomepage from "./pages/Guest/GuestHomepage";
import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GuestNavbar />
      {/* <UserNavbar /> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      <GuestHomepage/>
    </>
  );
};

export default App;
