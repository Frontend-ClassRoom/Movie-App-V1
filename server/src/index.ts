import App from './app';
import { Connection, createConnection } from 'typeorm';

const app = new App().application;

// MySql DB 연결
createConnection().then((connection: Connection) => {
    console.log('DB 연결 성공');
}).catch((error) => {
    console.log(error);
});

app.listen(3001, () => {
    console.log('3001번 포트 연결 성공!');
});