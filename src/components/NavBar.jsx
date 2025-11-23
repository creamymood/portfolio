import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <Container>
        <p>로고</p>
        <input type="text" />
        <MiniContainer>
          <button>로그인</button>
          <button>회원가입</button>
        </MiniContainer>
      </Container>
      <Outlet />
    </>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
`;

const MiniContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button``;
