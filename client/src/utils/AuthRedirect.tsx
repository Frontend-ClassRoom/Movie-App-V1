import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { useHistory } from 'react-router-dom';
import { AppRoutePath } from 'types/routes';
import { LogoutAction } from 'store/action/Auth/authAction';

interface AuthRedirectProps {
  children: React.ReactNode;
}

const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(LogoutAction());
      history.push(`${AppRoutePath.LOGIN_PATH}`);
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default AuthRedirect;
