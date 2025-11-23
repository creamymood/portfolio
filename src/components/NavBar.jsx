import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <p>로고</p>
      <input type="text" />
      <button>로그인</button>
      <button>회원가입</button>

      <Outlet />
    </>
  );
};

export default NavBar;
