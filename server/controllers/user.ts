import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError) {
            console.log(authError);
            return next(authError);
        }

        if(!user) {
            // 없는 사용자일 경우 처리
            console.log("사용자가 존재 하지 않습니다.");
        }

        return req.login(user, (loginError) => {    // passport.serializeUser()
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
        });
    })(req, res, next);
} 