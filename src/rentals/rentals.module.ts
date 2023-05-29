import { TypeOrmModule } from "@nestjs/typeorm";
import { Rental } from "./rentals.entity";
import { Module } from "@nestjs/common";
import { RentalsController } from "./rentals.controller";
import { RentalsService } from "./rentals.service";
import { Product } from "src/products/products.entity";
import { Client } from "src/clients/clients.entity";

@Module(
    {
        imports: [
        TypeOrmModule.forFeature([Rental, Product, Client])],
        controllers:[RentalsController],
        providers:[RentalsService],
    }
)
export class RentalsModule{}