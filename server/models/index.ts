import { Sequelize } from 'sequelize';
import { config } from '../config/config';

const env: string = process.env.NODE_ENV || 'development';

const sequelize: Sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, { host: config[env].host, dialect: 'mysql'});

export default sequelize; 
