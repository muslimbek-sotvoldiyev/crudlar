import { Body, Controller, Get, Post } from "@nestjs/common";
import { User, Userservice } from "./user.service";

@Controller("user")
export class Usercontroller {
    constructor(private readonly userservice:Userservice) {}

    @Get()
    get():User[]{
        return this.userservice.get()
    }

    @Post("revere-name")
    reversename(@Body() data):string {
        return this.userservice.reversename(data)
    }

    @Post("check-age")
    checkage(@Body() data):string {
        return this.userservice.checkage(data)
    }

    
    @Post("check-email")
    checkemail(@Body() data):string {
        return this.userservice.checkemail(data)
    }
    @Post("check-password")
    checkpassword(@Body() data):string {
        return this.userservice.checkpassword(data)
    }


}