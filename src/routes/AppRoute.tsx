import { Main } from "pages/Main";
import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoutePath } from "types/routes";

const AppRoute: FC = () => {
  return (
    <Switch>
      <Route exact path={AppRoutePath.MAIN_PATH} component={Main} />
    </Switch>
  );
};

export default AppRoute;
