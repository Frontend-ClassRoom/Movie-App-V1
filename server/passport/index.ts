import passport from "passport";
import User from "../models/user";
import local from "./localStrategy";

export default () => {
    passport.serializeUser((user, done) => {
        // 세션에 user.id 저장
        done(null, user.id);    
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            where: { id }
        })
            .then(user => done(null, user))
            .catch(err => done(err));
    })

    local();
}