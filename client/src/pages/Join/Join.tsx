import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { createUserAccount } from 'api/userApi';
import { InputBox } from 'component';
import { Account } from 'types/user';
import useAsync from 'hook/useAsync';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducer';

const Join = () => {
  const history = useHistory();
  const { isLoggedIn } = useSelector((state: RootState) => state.AuthReducer);
  const [account, setAccount] = useState<Account>({
    id: '',
    name: '',
    password: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const { execute: submit, data } = useAsync(
    () => createUserAccount(account),
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

  function validation<T>(obj: T) {
    const checkValidation = Object.values(obj)
      .map((value) => {
        return value.trim().length;
      })
      .find((value: number) => value === 0);
    return checkValidation === 0 ? false : true;
  }

  const onSubmit = useCallback(() => {
    if (validation<Account>(account)) {
      submit();
    }
  }, [account]);

  return (
    <div>
      <button onClick={onSubmit}>123</button>
      <InputBox
        value={account.id}
        name="id"
        type="text"
        onChange={onChangeAccount}
        submit={onSubmit}
      />
      <InputBox
        value={account.name}
        name="name"
        type="text"
        onChange={onChangeAccount}
        submit={onSubmit}
      />
      <InputBox
        value={account.password}
        name="password"
        type="password"
        onChange={onChangeAccount}
        submit={onSubmit}
      />
    </div>
  );
};

export default Join;
