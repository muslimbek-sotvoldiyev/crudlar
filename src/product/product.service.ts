import { Injectable } from "@nestjs/common";

@Injectable()
export class Productservice {
    get():string {
        return "product geti"
    }
}