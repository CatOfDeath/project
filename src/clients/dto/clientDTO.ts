import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateClientDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:'Иван'})
    first_name: string;

    @ApiProperty({example: 'Иванов'})
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({example: 'ул. Могилева'})
    @IsString()
    address: string;

    @ApiProperty({example: '88005553535'})
    @IsString()
    @IsNotEmpty()
    phone: string;
}
