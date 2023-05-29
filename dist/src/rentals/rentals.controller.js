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
exports.RentalsController = void 0;
const common_1 = require("@nestjs/common");
const rentals_service_1 = require("./rentals.service");
const rentals_entity_1 = require("./rentals.entity");
const rentalDTO_1 = require("./dto/rentalDTO");
const swagger_1 = require("@nestjs/swagger");
let RentalsController = class RentalsController {
    constructor(rentalsService) {
        this.rentalsService = rentalsService;
    }
    findAll() {
        return this.rentalsService.findAll();
    }
    findIncomplete() {
        return this.rentalsService.findIncomplete();
    }
    findOne(id) {
        return this.rentalsService.findOne(+id);
    }
    update(id, updatedRental) {
        return this.rentalsService.update(+id, updatedRental);
    }
    create(createRental) {
        return this.rentalsService.create(createRental);
    }
    remove(id) {
        return this.rentalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findIncomplete", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rentals_entity_1.Rental]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: rentalDTO_1.CreateRentalDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rentalDTO_1.CreateRentalDTO]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "remove", null);
RentalsController = __decorate([
    (0, swagger_1.ApiTags)('Rentals'),
    (0, common_1.Controller)('rentals'),
    __metadata("design:paramtypes", [rentals_service_1.RentalsService])
], RentalsController);
exports.RentalsController = RentalsController;
//# sourceMappingURL=rentals.controller.js.map