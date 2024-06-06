import React from "react";
import { Outlet } from "react-router-dom";
import "/src/styles/components/login.sass";

function OutLetLogin() {
  return (
    <div className="outletLoginPage">
      <Outlet />
    </div>
  );
}

export default OutLetLogin;
