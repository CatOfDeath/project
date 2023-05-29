import { Client } from "./clients.entity";
import { Repository } from "typeorm";
import { CreateClientDTO } from "./dto/clientDTO";
import { IncompleteClientDto } from "./dto/incomplete-client.dto";
export declare class ClientsService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<Client>);
    create(createClient: CreateClientDTO): Promise<Client>;
    findOne(Id: number): Promise<Client>;
    findAll(): Promise<Client[]>;
    findIncomplete(): Promise<IncompleteClientDto[]>;
    update(Id: number, updatedClient: Client): Promise<Client>;
    remove(id: number): Promise<void>;
}
