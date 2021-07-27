import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import passportConfig from './passport';

import * as userController from './controllers/user';

const COOKIE_SECRET: any = process.env.COOKIE_SECRET;
const SESSION_SECRET: any = process.env.SESSION_SECRET;

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
        this.init();
    }

    private init(): void {
        passportConfig();

        this.application.use(express.json());
        this.application.use(express.urlencoded({ extended: false }));
        this.application.use(cookieParser(SESSION_SECRET));
        this.application.use(session({
            resave: false,
            saveUninitialized: false,
            secret: COOKIE_SECRET,
            cookie: {
                httpOnly: true,
                secure:false,
            }
        }));

        this.application.use(passport.initialize());
        this.application.use(passport.session());

        this.application.get('/', (req: express.Request, res: express.Response) => {
            res.send('hello!');
        })

        this.application.post('/login', userController.postLogin);
        this.application.post('/join', userController.join);
    }
}

export default App;