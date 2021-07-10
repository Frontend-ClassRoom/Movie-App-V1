import { dbConfig } from '../types/dbConfig';

export const config: dbConfig = {
  "development": {
    "username": "developer",
    "password": "password",
    "database": "nodejs",
    "host": "13.124.232.29",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


