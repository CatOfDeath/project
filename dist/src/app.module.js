"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const clients_module_1 = require("./clients/clients.module");
const typeorm_1 = require("@nestjs/typeorm");
const products_module_1 = require("./products/products.module");
const rentals_module_1 = require("./rentals/rentals.module");
const payments_module_1 = require("./payments/payments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [clients_module_1.ClientsModule, products_module_1.ProductsModule, rentals_module_1.RentalsModule, payments_module_1.PaymentsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: 5432,
                database: 'coursework',
                username: 'postgres',
                password: 'postgres',
                host: 'localhost',
                synchronize: false,
                logging: 'all',
                entities: ['dist/**/*.entity{.ts,.js}']
            })],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map