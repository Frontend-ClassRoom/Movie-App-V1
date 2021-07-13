import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from 'component/Header/Header';
import Nav from 'component/Sidebar/Nav/NavPanel';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducer';
import { CloseFixedHeaderACtion, SetFixedHeaderAction } from 'store/action';
import { transformEm } from 'assets/styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);
  const { fixedHeader } = useSelector(
    (state: RootState) => state.CommonReducer
  );
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state: RootState) => state.CommonReducer);
  const layoutRef = useRef<any>(null);

  useEffect(() => {
    if (sidebar && layoutRef && layoutRef.current) {
      layoutRef.current.style.overflowY = 'hidden';
    } else if (!sidebar && layoutRef && layoutRef.current) {
      layoutRef.current.style.overflowY = 'auto';
    } else {
      return;
    }
  }, [sidebar]);

  const handleFixedHeader = () => {
    const scroll = layoutRef?.current?.scrollTop;
    if (scroll > 0) {
      if (fixedHeader) return;
      dispatch(SetFixedHeaderAction());
    } else {
      dispatch(CloseFixedHeaderACtion());
    }
  };

  useEffect(() => {
    layoutRef.current.addEventListener('scroll', handleFixedHeader);
  }, []);

  return (
    <StyledLayout ref={layoutRef} isFixed={fixedHeader}>
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

const StyledLayout = styled.div<{ isFixed: boolean }>`
  overflow-x: hidden;
  position: relative;
  margin: 0 auto;
  padding: ${transformEm(70)} ${transformEm(16)};
  max-width: 768px;
  height: 100vh;
  min-height: 500px;
`;
