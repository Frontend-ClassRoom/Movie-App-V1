import App from './app';
import db from './models';

const app = new App().application;

// DB 연결 수행
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3001, () => {
    console.log('3001번 포트 연결 성공!');
});