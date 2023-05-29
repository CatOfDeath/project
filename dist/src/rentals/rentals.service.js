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
exports.RentalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clients_entity_1 = require("../clients/clients.entity");
const products_entity_1 = require("../products/products.entity");
const typeorm_2 = require("typeorm");
const rentals_entity_1 = require("./rentals.entity");
const incomplete_rental_dto_1 = require("./dto/incomplete-rental.dto");
let RentalsService = class RentalsService {
    constructor(productRepository, rentalRepository, clientRepository) {
        this.productRepository = productRepository;
        this.rentalRepository = rentalRepository;
        this.clientRepository = clientRepository;
    }
    async create(createRental) {
        const rental = this.rentalRepository.create();
        rental.client_id = createRental.client_id;
        rental.product_id = createRental.product_id;
        const client = await this.clientRepository.findOne({ where: { id: createRental.client_id } });
        rental.client = client;
        const product = await this.productRepository.findOne({ where: { id: createRental.product_id } });
        rental.product = product;
        rental.rental_date = createRental.rental_date;
        rental.return_date = createRental.return_date;
        if (rental.return_date < rental.rental_date)
            throw new common_1.BadRequestException('Return date must be after rental date');
        await this.rentalRepository.save(rental);
        return rental;
    }
    async findOne(Id) {
        const rental = await this.rentalRepository.findOne({
            where: { id: Id },
            relations: {
                client: true,
                product: true
            }
        });
        return rental;
    }
    async findAll() {
        const rentals = await this.rentalRepository.find({
            relations: {
                client: true,
                product: true
            }
        });
        return rentals;
    }
    async findIncomplete() {
        const rentals = await this.rentalRepository.find({
            relations: {
                client: true,
                product: true
            }
        });
        const incompletedRentals = rentals.map((rental) => {
            const incompletedRental = new incomplete_rental_dto_1.IncompleteRentalDto();
            incompletedRental.client_first_name = rental.client.first_name;
            incompletedRental.client_last_name = rental.client.last_name;
            incompletedRental.product_name = rental.product.name;
            incompletedRental.rental_date = rental.rental_date;
            incompletedRental.return_date = rental.return_date;
            return incompletedRental;
        });
        return incompletedRentals;
    }
    async update(Id, updatedRental) {
        await this.rentalRepository.update(Id, {
            client_id: updatedRental.client_id,
            product_id: updatedRental.product_id,
            rental_date: updatedRental.rental_date,
            return_date: updatedRental.return_date
        });
        return await this.rentalRepository.findOne({ where: { id: Id } });
    }
    async remove(id) {
        await this.rentalRepository.delete(id);
    }
};
RentalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(rentals_entity_1.Rental)),
    __param(2, (0, typeorm_1.InjectRepository)(clients_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RentalsService);
exports.RentalsService = RentalsService;
//# sourceMappingURL=rentals.service.js.map