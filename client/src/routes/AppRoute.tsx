import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoutePath } from 'types/routes';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Login } from 'pages/Login';
import AuthRedirect from 'utils/AuthRedirect';

const AppRoute: FC = () => {
  return (
    <Switch>
      <Route path={AppRoutePath.LOGIN_PATH} component={Login} />
      <AuthRedirect>
        <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
        <Route path={AppRoutePath.DETAIL_PATH} component={Detail} />
      </AuthRedirect>
    </Switch>
  );
};

export default AppRoute;
