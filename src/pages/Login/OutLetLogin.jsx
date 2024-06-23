import React from "react";
import { Outlet } from "react-router-dom";

function OutLetLogin() {
  return (
    <div className="outletLoginPage">
      <Outlet />
    </div>
  );
}

export default OutLetLogin;
