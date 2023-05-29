import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { Payment } from "./payments.entity";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreatePaymentDTO } from "./dto/paymentDTO";

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController{
    constructor(private readonly paymentsService: PaymentsService){}

    @Get()
    findAll(){
        return this.paymentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.paymentsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedPayment: Payment){
        return this.paymentsService.update(+id, updatedPayment);
    }

    @Post()
    @ApiBody({type: CreatePaymentDTO})
    create(@Body() createPayment: CreatePaymentDTO){
        return this.paymentsService.create(createPayment);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.paymentsService.remove(+id);
    }
}