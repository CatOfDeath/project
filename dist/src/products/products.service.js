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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("./products.entity");
const incomplete_product_dto_1 = require("./dto/incomplete-product.dto");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(createProduct) {
        const product = this.productRepository.create();
        product.name = createProduct.name;
        product.type = createProduct.type;
        product.quantity = createProduct.quantity;
        product.price = createProduct.price;
        if (product.quantity < 0)
            throw new common_1.BadRequestException('Quantity cannot be a negative number');
        await this.productRepository.save(product);
        return product;
    }
    async findOne(Id) {
        return this.productRepository.findOne({
            where: { id: Id }
        });
    }
    async findAll() {
        const products = await this.productRepository.find();
        return products;
    }
    async findIncomplete() {
        const products = await this.productRepository.find();
        const incompleteProducts = products.map((product) => {
            const incompleteProduct = new incomplete_product_dto_1.IncompleteProductDto();
            incompleteProduct.name_product = product.name;
            incompleteProduct.type_product = product.type;
            incompleteProduct.price = product.price;
            return incompleteProduct;
        });
        return incompleteProducts;
    }
    async update(Id, updatedProduct) {
        await this.productRepository.update(Id, {
            name: updatedProduct.name,
            type: updatedProduct.type,
            quantity: updatedProduct.quantity,
            price: updatedProduct.price
        });
        return this.productRepository.findOne({
            where: { id: Id }
        });
        ;
    }
    async remove(id) {
        await this.productRepository.delete(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map