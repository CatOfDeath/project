import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { CreateClientDTO } from "./dto/clientDTO";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('Clients')
@Controller('clients')
export class ClientsController{
    constructor(private readonly clientsService: ClientsService){}

    @Get()
    findAll(){
        return this.clientsService.findAll();
    }

    @Get('/incomplete')
    findIncomplete(){
        return this.clientsService.findIncomplete();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.clientsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedClient: Client){
        return this.clientsService.update(+id, updatedClient);
    }

    @Post()
    @ApiBody({type: CreateClientDTO})
    create(@Body() createClient: CreateClientDTO){
        return this.clientsService.create(createClient);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.clientsService.remove(+id);
    }
}