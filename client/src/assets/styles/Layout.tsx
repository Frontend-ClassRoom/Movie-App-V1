import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from 'component/Header/Header';
import Nav from 'component/Sidebar/Nav/NavPanel';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);
  const { sidebar } = useSelector((state: RootState) => state.CommonReducer);
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebar && layoutRef && layoutRef.current) {
      layoutRef.current.style.overflowY = 'hidden';
    } else if (!sidebar && layoutRef && layoutRef.current) {
      layoutRef.current.style.overflowY = 'auto';
    } else {
      return;
    }
  }, [sidebar]);

  return (
    <StyledLayout ref={layoutRef}>
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
  overflow-x: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 1em;
  max-width: 768px;
  height: 100vh;
  min-height: 500px;
`;
