import { error } from "winston";
import { AppInterfaces } from "../../interfaces";

export class User {
    constructor(
        private readonly userRepo: AppInterfaces.User
    ) {}

    async hello(input: any): Promise<any> {
        const prisma
        const data = await prisma.$transaction(async (tx) => {
            const poolId = await this.userRepo.hello(id);

            if(!poolId){
                throw new error;
            }
        })
    }
}