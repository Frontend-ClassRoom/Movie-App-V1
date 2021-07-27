import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../models/user";
import { UserAttributes } from "../types/dbModel";
import bcrypt from 'bcrypt';

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

export const join = async (req: Request, res: Response, next: NextFunction) => {
    const {id, password, name} = req.body;

    try {
        const exUser: UserAttributes | null = await User.findOne({ where: { id } });

        if(exUser) {
            res.send({message:"이미 존재하는 유저입니다."});
            return;
        }

        const pwdHash = await bcrypt.hash(password, 12);

        await User.create({
            id,
            password: pwdHash,
            name,
        });

        res.send({message:"유저 생성 성공!"});
    } catch(error) {
        console.error(error);
        return next(error);
    }
} 