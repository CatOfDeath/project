import { Client } from "src/clients/clients.entity";
import { Product } from "src/products/products.entity";
import { Repository } from "typeorm";
import { CreateRentalDTO } from "./dto/rentalDTO";
import { Rental } from "./rentals.entity";
import { IncompleteRentalDto } from "./dto/incomplete-rental.dto";
export declare class RentalsService {
    private readonly productRepository;
    private readonly rentalRepository;
    private readonly clientRepository;
    constructor(productRepository: Repository<Product>, rentalRepository: Repository<Rental>, clientRepository: Repository<Client>);
    create(createRental: CreateRentalDTO): Promise<Rental>;
    findOne(Id: number): Promise<Rental>;
    findAll(): Promise<Rental[]>;
    findIncomplete(): Promise<IncompleteRentalDto[]>;
    update(Id: number, updatedRental: Rental): Promise<Rental>;
    remove(id: number): Promise<void>;
}
