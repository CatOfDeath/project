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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const clients_entity_1 = require("../clients/clients.entity");
const products_entity_1 = require("../products/products.entity");
const typeorm_1 = require("typeorm");
let Rental = class Rental {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rental.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rental.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rental.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clients_entity_1.Client, (client) => client.id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", clients_entity_1.Client)
], Rental.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Product, (product) => product.id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", products_entity_1.Product)
], Rental.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Rental.prototype, "rental_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Rental.prototype, "return_date", void 0);
Rental = __decorate([
    (0, typeorm_1.Entity)('rentals')
], Rental);
exports.Rental = Rental;
//# sourceMappingURL=rentals.entity.js.map