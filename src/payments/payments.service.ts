import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./payments.entity";
import { Repository } from "typeorm";
import { Rental } from "src/rentals/rentals.entity";
import { CreatePaymentDTO } from "./dto/paymentDTO";


@Injectable()
export class PaymentsService{
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,

        @InjectRepository(Rental)
        private readonly rentalRepository: Repository<Rental>
        ){}

    async create(createPayment: CreatePaymentDTO): Promise<Payment>
    {
        const payment = this.paymentRepository.create();
        payment.rental_id = createPayment.rental_id;
        payment.amount = createPayment.amount;
        const rental = await this.rentalRepository.findOne({where:{id :createPayment.rental_id}})
        payment.rental = rental;
        payment.payment_date = createPayment.payment_date
        await this.paymentRepository.save(payment);
        return payment;
    }

    async findOne(Id: number){
        const payment = await this.paymentRepository.findOne({
            where:{id: Id},
            relations: {
                rental: true
             }
        });
        return payment;
    }

    async findAll(): Promise<Payment[]>{
        const payments = await this.paymentRepository.find({
            relations: {
                rental: true
             }
        });
        return payments;
    }


    async update(Id: number, updatedPayment:Payment){
        await this.paymentRepository.update(Id,
            {
                rental_id: updatedPayment.rental_id,
                amount: updatedPayment.amount,
                payment_date: updatedPayment.payment_date
            })
            return await this.rentalRepository.findOne(
                {where: {id: Id}}
            );
    }

    async remove(id: number){
        await this.paymentRepository.delete(id);
    }
}