type env = 'development' | 'test' | 'production';

export interface dbConnectionModel  {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
}

export interface dbConfigModel  {
    [development: string]: dbConnectionModel;
    test: dbConnectionModel;
    production: dbConnectionModel;
}

export interface UserAttributes {
    id: number;
    password: string;
    name: string;
}