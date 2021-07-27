import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { createUserAccount } from 'api/userApi';
import { Button, InputBox } from 'component';
import { Account } from 'types/user';
import useAsync from 'hook/useAsync';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { StyledWrapper } from 'pages/Login/Styled';
import { JoinForm, StyledTitle } from './Styled';
import { validation } from 'utils/ValidationObject';

const Join = () => {
  const history = useHistory();
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);
  const [account, setAccount] = useState<Account>({
    id: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const clearInput = () => {
    return {
      id: '',
      name: '',
      password: '',
      confirmPassword: '',
    };
  };

  const { execute: submit, data } = useAsync(
    () =>
      createUserAccount({
        id: account.id,
        name: account.name,
        password: account.password,
      }),
    false
  );

  const onChangeAccount = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setAccount({
        ...account,
        [name]: value,
      });
    },
    [account]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { password, confirmPassword } = account;

      if (password !== confirmPassword) {
        alert('비밀번호가 같아야합니다.');
        return;
      }

      if (validation<Account>(account)) {
        submit();
        setAccount(clearInput());
        history.push('/login');
        /**
         * submit 후에 return data를 확인해서 history.push('/login') 하거나 로직 협의
         */
      }
    },
    [account, data]
  );

  return (
    <StyledWrapper>
      <StyledTitle>SIGN UP</StyledTitle>
      <JoinForm onSubmit={onSubmit} method="post">
        <InputBox
          className="join-form"
          value={account.id}
          name="id"
          type="text"
          placeholder="아이디를 입력해주세요."
          onChange={onChangeAccount}
          submit={onSubmit}
        />
        <InputBox
          className="join-form"
          value={account.name}
          name="name"
          type="text"
          placeholder="사용하실 닉네임을 입력해주세요."
          onChange={onChangeAccount}
          submit={onSubmit}
        />
        <InputBox
          className="join-form"
          value={account.password}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={onChangeAccount}
          submit={onSubmit}
        />
        <InputBox
          className="join-form"
          value={account.confirmPassword || ''}
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 한번더 입력해주세요."
          onChange={onChangeAccount}
          submit={onSubmit}
        />
        <Button
          variant="primary"
          size="large"
          style={{ width: '100%' }}
          onClick={onSubmit}
          label="회원가입"
        />
      </JoinForm>
    </StyledWrapper>
  );
};

export default Join;
