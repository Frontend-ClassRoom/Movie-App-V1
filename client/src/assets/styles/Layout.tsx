import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from 'component/Header/Header';
import Nav from 'component/Sidebar/Nav/NavPanel';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { transformEm } from 'assets/styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);

  return (
    <StyledLayout>
      {isLoggedIn && (
        <>
          <Nav />
          <Header />
        </>
      )}
      {children}
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  padding: ${transformEm(90)} ${transformEm(16)};
`;
