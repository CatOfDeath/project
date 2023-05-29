import { UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

@UsePipes(new ValidationPipe({transform: true}))
export class CreatePaymentDTO{

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    rental_id: number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty({example:'2023-01-21T21:00:00.000Z'})
    @Transform(({value}) => new Date(value))
    @IsDate()
    payment_date: Date;
    
}