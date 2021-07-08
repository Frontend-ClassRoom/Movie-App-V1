import React from 'react';
import { AuthState } from 'store/reducer/Auth';
import styled from 'styled-components';

interface UserProps {
  user: AuthState;
  logout: () => void;
}

const User = ({ user, logout }: UserProps) => {
  return (
    <StyledUser>
      <p>{`접속 유저 : ${user.user.id}`}</p>
      <p>{`접속 유저이름 : ${user.user.name}`}</p>
      <p>
        접속 여부 : <span>{`${user.isLoggedIn ? '접속중' : '접속종료'}`}</span>
      </p>
      <button type="button" onClick={logout} title="로그아웃">
        로그아웃
      </button>
    </StyledUser>
  );
};

export default User;

const StyledUser = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  p {
    font-weight: 400;
    > span {
      color: orange;
    }

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  button {
    margin-top: 10px;
    width: 100%;
    outline: none;
    border: none;
  }
`;
