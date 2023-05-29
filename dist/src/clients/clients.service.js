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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clients_entity_1 = require("./clients.entity");
const typeorm_2 = require("typeorm");
const incomplete_client_dto_1 = require("./dto/incomplete-client.dto");
let ClientsService = class ClientsService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClient) {
        const client = this.clientRepository.create();
        client.first_name = createClient.first_name;
        client.last_name = createClient.last_name;
        client.address = createClient.address;
        client.phone = createClient.phone;
        if (client.phone.length >= 21)
            throw new common_1.BadRequestException('Invalid phone number format');
        await this.clientRepository.save(client);
        return client;
    }
    async findOne(Id) {
        return this.clientRepository.findOne({
            where: { id: Id }
        });
    }
    async findAll() {
        const clients = await this.clientRepository.find();
        return clients;
    }
    async findIncomplete() {
        const clients = await this.clientRepository.find();
        const incompleteClients = clients.map((client) => {
            const incompleteClient = new incomplete_client_dto_1.IncompleteClientDto();
            incompleteClient.surname = client.last_name;
            incompleteClient.name = client.first_name;
            incompleteClient.phone = client.phone;
            return incompleteClient;
        });
        return incompleteClients;
    }
    async update(Id, updatedClient) {
        await this.clientRepository.update(Id, {
            last_name: updatedClient.last_name,
            first_name: updatedClient.first_name,
            address: updatedClient.address,
            phone: updatedClient.phone
        });
        return this.clientRepository.findOne({
            where: { id: Id }
        });
        ;
    }
    async remove(id) {
        await this.clientRepository.delete(id);
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clients_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map