import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./clients.entity";
import { Repository } from "typeorm";
import { CreateClientDTO } from "./dto/clientDTO";
import { IncompleteClientDto } from "./dto/incomplete-client.dto";

@Injectable()
export class ClientsService{
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>){}

    async create(createClient: CreateClientDTO): Promise<Client>
    {
        const client = this.clientRepository.create();
        client.first_name = createClient.first_name;
        client.last_name = createClient.last_name;
        client.address = createClient.address;
        client.phone = createClient.phone;
        if(client.phone.length >= 21)
            throw new BadRequestException('Invalid phone number format');
        
        await this.clientRepository.save(client);
        return client;
    }

    async findOne(Id: number): Promise<Client>
    {
        return this.clientRepository.findOne({
            where: {id: Id}
        });
    }

    async findAll(): Promise<Client[]>
    {
        const clients = await this.clientRepository.find();
        return clients;
    }

    async findIncomplete(): Promise<IncompleteClientDto[]>
    {
        const clients = await this.clientRepository.find();
        const incompleteClients: IncompleteClientDto[] = clients.map((client) =>
        {
            const incompleteClient = new IncompleteClientDto();
            incompleteClient.surname = client.last_name;
            incompleteClient.name = client.first_name;
            incompleteClient.phone = client.phone;
            return incompleteClient;
        }
        );
        return incompleteClients;
    }

    async update(Id: number, updatedClient: Client){
        await this.clientRepository.update(Id,{
            last_name: updatedClient.last_name,
            first_name: updatedClient.first_name,
            address: updatedClient.address,
            phone:updatedClient.phone
        });
        return this.clientRepository.findOne({
            where: {id: Id}
        });;
    }

    async remove(id: number){
        await this.clientRepository.delete(id);
    }
}