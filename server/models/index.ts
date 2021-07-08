// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize';
import { config } from '../config/config'

// const User = require('./user');
// const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config')[env];


const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, { host: config.development.host, dialect: 'mysql'});

const db = {
    sequelize : sequelize,
    Sequelize : Sequelize
};

// db.User = User;
// db.Comment = Comment;

// MySql의 테이블과 연결
// User.init(sequelize);
// Comment.init(sequelize);

export default db;