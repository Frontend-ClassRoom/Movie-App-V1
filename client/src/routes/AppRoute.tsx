import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoutePath } from 'types/routes';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Login } from 'pages/Login';
import SettingPage from 'pages/Setting/Setting';
import MoviePage from 'pages/Movie/Movie';
import MovieDetailPage from 'pages/Movie/MovieDetail';
import Join from 'pages/Join/Join';
import AuthRedirect from 'utils/AuthRedirect';
import Layout from 'assets/styles/Layout';
import CardPage from 'pages/Card/CardPage';
import WritePage from 'pages/Write/WritePage';

const AppRoute: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={AppRoutePath.LOGIN_PATH} component={Login} />
        <Route path={AppRoutePath.JOIN_PATH} component={Join} />
        <AuthRedirect>
          <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
          <Route path={AppRoutePath.DETAIL_PATH} component={Detail} />
          <Route path={AppRoutePath.MOVIE_PATH} component={MoviePage} />
          <Route
            path={AppRoutePath.MOVIE_DETAIL_PATH}
            component={MovieDetailPage}
          />
          <Route path={AppRoutePath.SETTING_PATH} component={SettingPage} />
          <Route path={AppRoutePath.MYCARD_PATH} component={CardPage} />
          <Route path={AppRoutePath.WRITE_PATH} component={WritePage} />
        </AuthRedirect>
      </Switch>
    </Layout>
  );
};

export default AppRoute;
