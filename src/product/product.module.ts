import { Module } from "@nestjs/common";
import { Productcontroller } from "./product.controller";
import { Productservice } from "./product.service";

@Module({
    controllers:[Productcontroller],
    providers:[Productservice]
})
export class ProductModule {}