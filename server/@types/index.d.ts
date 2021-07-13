import { UserAttributes } from "../types/dbModel";

declare global {
    namespace Express {
        export interface User extends UserAttributes { }
    }
}