import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import { RentalsService } from "./rentals.service";
import { Rental } from "./rentals.entity";
import { CreateRentalDTO } from "./dto/rentalDTO";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('Rentals')
@Controller('rentals')
export class RentalsController{
    constructor(private readonly rentalsService: RentalsService){}

    @Get()
    findAll(){
        return this.rentalsService.findAll();
    }

    @Get('/incomplete')
    findIncomplete(){
        return this.rentalsService.findIncomplete();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.rentalsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedRental: Rental){
        return this.rentalsService.update(+id, updatedRental);
    }

    @Post()
    @ApiBody({type: CreateRentalDTO})
    create(@Body() createRental: CreateRentalDTO){
        return this.rentalsService.create(createRental);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.rentalsService.remove(+id);
    }
}