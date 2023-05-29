import { Module } from "@nestjs/common";
import { Product } from "./products.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module(
    {
        imports: [
        TypeOrmModule.forFeature([Product])],
        controllers:[ProductsController],
        providers:[ProductsService],
    }
)
export class ProductsModule{}