import { UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

@UsePipes(new ValidationPipe({transform: true}))
export class CreateRentalDTO{
    @ApiProperty({example: '1'})
    @IsNumber()
    @IsNotEmpty()
    client_id: number;

    @ApiProperty({example: '1'})
    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @ApiProperty({example: '2023-01-21T21:00:00.000Z'})
    @Transform(({value}) => new Date(value))
    @IsDate()
    rental_date: Date;

    @ApiProperty({example: '2023-01-21T21:00:00.000Z'})
    @Transform(({value}) => new Date(value))
    @IsDate()
    return_date: Date;
}