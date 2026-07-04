import { Controller, Get } from "@nestjs/common";
import { Productservice } from "./product.service";

@Controller("product")
export class Productcontroller {
    constructor(private readonly productservice:Productservice) {}

    @Get()
    get():string{
        return this.productservice.get()
    }
}