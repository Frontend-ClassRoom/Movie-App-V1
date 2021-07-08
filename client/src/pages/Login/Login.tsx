import { useCallback, useState } from 'react';
import { TextInput } from 'component';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { LoginAction } from 'store/reducer/Auth';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

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

  const setLoginUser = useCallback(() => {
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
  }, [userId, userPassword]);

  return (
    <StyledLogin>
      <LoginForm>
        <TextInput
          value={userId}
          type="text"
          onChange={onChangeUserId}
          placeholder="아이디 입력"
          submit={setLoginUser}
        />
        <TextInput
          value={userPassword}
          type="password"
          onChange={onChangeUserPassword}
          placeholder="비밀번호 입력"
          submit={setLoginUser}
        />
        <button style={{ width: '100%' }} onClick={setLoginUser}>
          로그인
        </button>
      </LoginForm>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
`;
