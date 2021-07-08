import React from 'react';
import { AuthState } from 'store/reducer/Auth';
import styled from 'styled-components';

interface UserProps {
  user: AuthState;
}

const User = ({ user }: UserProps) => {
  return (
    <StyledUser>
      <p>{`접속 유저 : ${user.user.id}`}</p>
      <p>{`접속 유저이름 : ${user.user.name}`}</p>
      <p>
        접속 여부 : <span>{`${user.isLoggedIn ? '접속중' : '접속종료'}`}</span>
      </p>
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
`;
