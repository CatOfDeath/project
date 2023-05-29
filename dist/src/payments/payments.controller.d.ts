import { PaymentsService } from "./payments.service";
import { Payment } from "./payments.entity";
import { CreatePaymentDTO } from "./dto/paymentDTO";
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    findAll(): Promise<Payment[]>;
    findOne(id: string): Promise<Payment>;
    update(id: string, updatedPayment: Payment): Promise<import("../rentals/rentals.entity").Rental>;
    create(createPayment: CreatePaymentDTO): Promise<Payment>;
    remove(id: string): Promise<void>;
}
