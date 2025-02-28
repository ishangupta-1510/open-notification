import { TUserAuthInput } from "../../infrastructure/models/user/userModel";

export interface User {
    hello(input: TUserAuthInput) : Promise<any>;
}