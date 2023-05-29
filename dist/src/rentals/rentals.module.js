"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const rentals_entity_1 = require("./rentals.entity");
const common_1 = require("@nestjs/common");
const rentals_controller_1 = require("./rentals.controller");
const rentals_service_1 = require("./rentals.service");
const products_entity_1 = require("../products/products.entity");
const clients_entity_1 = require("../clients/clients.entity");
let RentalsModule = class RentalsModule {
};
RentalsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rentals_entity_1.Rental, products_entity_1.Product, clients_entity_1.Client])
        ],
        controllers: [rentals_controller_1.RentalsController],
        providers: [rentals_service_1.RentalsService],
    })
], RentalsModule);
exports.RentalsModule = RentalsModule;
//# sourceMappingURL=rentals.module.js.map