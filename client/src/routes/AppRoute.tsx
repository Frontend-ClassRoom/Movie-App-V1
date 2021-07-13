import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoutePath } from 'types/routes';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Login } from 'pages/Login';
import MoviePage from 'pages/Movie/Movie';
import AuthRedirect from 'utils/AuthRedirect';
import Layout from 'assets/styles/Layout';

const AppRoute: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={AppRoutePath.LOGIN_PATH} component={Login} />
        <AuthRedirect>
          <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
          <Route path={AppRoutePath.DETAIL_PATH} component={Detail} />
          <Route path={AppRoutePath.MOVIE_PATH} component={MoviePage} />
        </AuthRedirect>
      </Switch>
    </Layout>
  );
};

export default AppRoute;
