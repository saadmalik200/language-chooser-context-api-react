import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="h-screen bg-gradient-to-bl from-amber-300 via-amber-400 to-orange-500 ">
      {props.children}
    </div>
  );
};

export default Layout;
