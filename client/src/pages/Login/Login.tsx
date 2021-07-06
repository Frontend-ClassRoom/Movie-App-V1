import { useCallback, useState } from "react";
import { TextInput } from "component";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const history = useHistory();
  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const clearInput = () => {
    setUserId("");
    setUserPassword("");
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
      alert("입력 오류");
      return;
    }

    /**
     * Submit Logic
     */

    if (userCheck) {
      history.push("/");
      clearInput();
    }
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
        <button style={{ width: "100%" }} onClick={setLoginUser}>
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
