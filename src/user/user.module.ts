import { Module } from "@nestjs/common";
import { Usercontroller } from "./user.controller";
import { Userservice } from "./user.service";

@Module({
    imports:[],
    controllers:[Usercontroller],
    providers:[Userservice]
})
export class UserModule {}