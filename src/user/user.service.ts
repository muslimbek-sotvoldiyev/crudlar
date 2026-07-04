import { Injectable } from "@nestjs/common";


export interface User {
    id:number,
    name:string,
    email:string
}

@Injectable()
export class Userservice {
    get():User[] {
        let userlist:User[] = [
    {id:1, name:"ali", email:"ali@gmail.com"},
    {id:2, name:"bakir", email:"bakir@gmail.com"},
    {id:3, name:"vali", email:"vali@gmail.com"},
    {id:4, name:"salim", email:"salim@gmail.com"},
]

        return userlist
    }

    reversename(data):string {
        return data.name.split("").reverse().join("")
    }
    checkage(data):string {
        if (data.age >= 20) {
             return "adult"
        }else if (data.age >= 17 && data.age < 20) {
            return "minur"
        }else if (data.age < 17) {
            return "child"
        }
        return "xatolik"
    }
 
    checkemail(data):string {
        if (data.email.includes("@")) {
            return "valid"
        }
    return "invalid"
    }
 
    checkpassword(data):string {
        if (data.password.length < 8) {
            return "easy"
        }
    return "strong"
    }

    
}