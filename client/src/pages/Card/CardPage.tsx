import React from 'react';
import { useHistory } from 'react-router-dom';

const CardPage = () => {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push('/write')}>Post 생성</button>
      <p>Card</p>
    </>
  );
};

export default CardPage;
