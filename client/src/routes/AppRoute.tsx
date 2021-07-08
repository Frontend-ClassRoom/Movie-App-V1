import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AppRoutePath } from 'types/routes';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Login } from 'pages/Login';

const AppRoute: FC = () => {
  return (
    <StyledLayout>
      <Switch>
        <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
        <Route path={AppRoutePath.LOGIN_PATH} component={Login} />
        <Route path={AppRoutePath.DETAIL_PATH} component={Detail} />
      </Switch>
    </StyledLayout>
  );
};

export default AppRoute;

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  max-width: 768px;
  height: 100vh;
  min-height: 500px;
`;
