import { Payment } from "./payments.entity";
import { Repository } from "typeorm";
import { Rental } from "src/rentals/rentals.entity";
import { CreatePaymentDTO } from "./dto/paymentDTO";
export declare class PaymentsService {
    private readonly paymentRepository;
    private readonly rentalRepository;
    constructor(paymentRepository: Repository<Payment>, rentalRepository: Repository<Rental>);
    create(createPayment: CreatePaymentDTO): Promise<Payment>;
    findOne(Id: number): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    update(Id: number, updatedPayment: Payment): Promise<Rental>;
    remove(id: number): Promise<void>;
}
