import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { LoginAction } from 'store/action';
import { StyledWrapper, StyledTitle, StyledText, LoginForm } from './Styled';
import { InputBox, Button } from 'component';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const clearInput = () => {
    setUserId('');
    setUserPassword('');
  };

  const onChangeUserId = useCallback(
    (value) => {
      setUserId(value);
    },
    [userId]
  );

  const onChangeUserPassword = useCallback(
    (value) => {
      setUserPassword(value);
    },
    [userPassword]
  );

  const setLoginUser = useCallback(
    (e) => {
      e.preventDefault();
      if (userId.trim().length === 0 || userPassword.trim().length === 0) {
        alert('입력 오류');
        return;
      }
      /**
       * Submit Logic
       */
      const loginUser = {
        id: userId,
        name: `${userId}#123`, // test
      };

      dispatch(LoginAction(loginUser));
      history.push('/');
      clearInput();
    },
    [userId, userPassword]
  );

  return (
    <StyledWrapper>
      <StyledTitle>Welcome to MovieApp</StyledTitle>
      <StyledText>Your personal guide to the world of cinema</StyledText>
      <LoginForm onSubmit={setLoginUser}>
        <InputBox
          value={userId}
          type="text"
          onChange={onChangeUserId}
          placeholder="아이디 입력"
          className="login-form"
        />
        <InputBox
          value={userPassword}
          type="password"
          onChange={onChangeUserPassword}
          placeholder="비밀번호 입력"
          className="login-form"
        />
        <p className="forget-pw">
          <Button variant="link" label="Forgot password?" />
        </p>
        <Button
          size="large"
          style={{ width: '100%' }}
          onClick={setLoginUser}
          label="로그인"
        />
      </LoginForm>
    </StyledWrapper>
  );
};

export default Login;
