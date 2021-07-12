import { FC, useRef, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AppRoutePath } from 'types/routes';
import { RootState } from 'store/reducer';
import { useSelector } from 'react-redux';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Login } from 'pages/Login';
import MoviePage from 'pages/Movie/Movie';
import Nav from 'component/Sidebar/Nav/NavPanel';
import Header from 'component/Header/Header';
import AuthRedirect from 'utils/AuthRedirect';

const AppRoute: FC = () => {
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
      <Nav />
      <Header />
      <Switch>
        <Route path={AppRoutePath.LOGIN_PATH} component={Login} />
        <AuthRedirect>
          <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
          <Route path={AppRoutePath.DETAIL_PATH} component={Detail} />
          <Route path={AppRoutePath.MOVIE_PATH} component={MoviePage} />
        </AuthRedirect>
      </Switch>
    </StyledLayout>
  );
};

export default AppRoute;

const StyledLayout = styled.div`
  overflow-x: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 1em;
  max-width: 768px;
  height: 100vh;
  min-height: 500px;
`;
