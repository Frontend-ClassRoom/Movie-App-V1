import passport from "passport";
import User from "../models/user";

import * as passportLocal from "passport-local";
import * as bcrypt from "bcrypt"

const LocalStrategy = passportLocal.Strategy;


export default () => {
    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
    }, async (id, password, done) => {
        try {
            const exUser = await User.findOne({ where: { id } });

            if(exUser) {
                const result = await bcrypt.compare(password, exUser.password);

                if(result) {
                    done(null, exUser);
                } else {
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            } else {
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        } catch(error) {
            console.log(error);
            done(error);
        }  
    }))
}