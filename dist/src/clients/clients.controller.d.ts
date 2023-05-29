import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";
import { CreateClientDTO } from "./dto/clientDTO";
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(): Promise<Client[]>;
    findIncomplete(): Promise<import("./dto/incomplete-client.dto").IncompleteClientDto[]>;
    findOne(id: string): Promise<Client>;
    update(id: string, updatedClient: Client): Promise<Client>;
    create(createClient: CreateClientDTO): Promise<Client>;
    remove(id: string): Promise<void>;
}
