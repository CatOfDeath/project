import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rental } from "src/rentals/rentals.entity";
import { Payment } from "./payments.entity";
import { PaymentsController } from "./payments.controller";
import { PaymentsService } from "./payments.service";

@Module(
    {
        imports: [
        TypeOrmModule.forFeature([Rental,Payment])],
        controllers:[PaymentsController],
        providers:[PaymentsService],
    }
)
export class PaymentsModule{}