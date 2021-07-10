type env = 'development' | 'test' | 'production';

export interface connectionInfo  {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
}

export interface dbConfig  {
    [development: string]: connectionInfo;
    test: connectionInfo;
    production: connectionInfo;
}
