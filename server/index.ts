import { NextFunction } from 'express';
import App from './app';
import sequelize from './models';
import User from './models/user'

const app = new App().application;

// DB 연결 수행
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
        User.findAll();
    })
    .catch((err) => {
        console.log(err);
    });


app.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
    res.status(err.status || 500);
});   

app.listen(3001, () => {
    console.log('3001번 포트 연결 성공!');
});