import App from './app';

const app = new App().application;

app.listen(3001, () => {
    console.log('3001번 포트 연결 성공!');
});