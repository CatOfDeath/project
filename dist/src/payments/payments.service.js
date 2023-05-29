"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payments_entity_1 = require("./payments.entity");
const typeorm_2 = require("typeorm");
const rentals_entity_1 = require("../rentals/rentals.entity");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository, rentalRepository) {
        this.paymentRepository = paymentRepository;
        this.rentalRepository = rentalRepository;
    }
    async create(createPayment) {
        const payment = this.paymentRepository.create();
        payment.rental_id = createPayment.rental_id;
        payment.amount = createPayment.amount;
        const rental = await this.rentalRepository.findOne({ where: { id: createPayment.rental_id } });
        payment.rental = rental;
        payment.payment_date = createPayment.payment_date;
        await this.paymentRepository.save(payment);
        return payment;
    }
    async findOne(Id) {
        const payment = await this.paymentRepository.findOne({
            where: { id: Id },
            relations: {
                rental: true
            }
        });
        return payment;
    }
    async findAll() {
        const payments = await this.paymentRepository.find({
            relations: {
                rental: true
            }
        });
        return payments;
    }
    async update(Id, updatedPayment) {
        await this.paymentRepository.update(Id, {
            rental_id: updatedPayment.rental_id,
            amount: updatedPayment.amount,
            payment_date: updatedPayment.payment_date
        });
        return await this.rentalRepository.findOne({ where: { id: Id } });
    }
    async remove(id) {
        await this.paymentRepository.delete(id);
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payments_entity_1.Payment)),
    __param(1, (0, typeorm_1.InjectRepository)(rentals_entity_1.Rental)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map