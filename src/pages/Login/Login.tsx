import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputBox, Button } from 'component';
import { StyledWrapper, LoginForm } from './Styled';

const Login = () => {
  const history = useHistory();
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
    const userCheck = false; // 임시 로그인 성공 리턴값 이 값이 true면 path 이동

    if (userId.trim().length === 0 || userPassword.trim().length === 0) {
      alert('입력 오류');
      return;
    }

    /**
     * Submit Logic
     */

    if (userCheck) {
      history.push('/');
      clearInput();
    }
  }, [userId, userPassword]);

  return (
    <StyledWrapper>
      <h2>Welcome to MovieApp</h2>
      <p>Your personal guide to the world of cinema</p>
      <LoginForm>
        <InputBox
          value={userId}
          type='text'
          onChange={onChangeUserId}
          placeholder='아이디 입력'
          submit={setLoginUser}
        />
        <InputBox
          value={userPassword}
          type='password'
          onChange={onChangeUserPassword}
          placeholder='비밀번호 입력'
          submit={setLoginUser}
        />
        <Button link label='Forgot password?' />
        <Button
          style={{ width: '100%' }}
          onClick={setLoginUser}
          label='로그인'
        />
      </LoginForm>
    </StyledWrapper>
  );
};

export default Login;
