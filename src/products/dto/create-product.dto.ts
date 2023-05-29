import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateProductDTO{
    @ApiProperty({example: 'Скорость ветров 3000'})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: 'велосипед'})
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @ApiProperty({example: 1000})
    @IsNotEmpty()
    @IsNumber()
    price: number;
}