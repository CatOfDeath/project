import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/clients/clients.entity";
import { Product } from "src/products/products.entity";
import { Repository } from "typeorm";
import { CreateRentalDTO } from "./dto/rentalDTO";
import { Rental } from "./rentals.entity";
import { IncompleteRentalDto } from "./dto/incomplete-rental.dto";

@Injectable()
export class RentalsService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(Rental)
        private readonly rentalRepository: Repository<Rental>,

        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
        ){}

    async create(createRental: CreateRentalDTO): Promise<Rental>
    {
        const rental = this.rentalRepository.create();
        rental.client_id = createRental.client_id;
        rental.product_id = createRental.product_id;
        const client = await this.clientRepository.findOne({where:{id :createRental.client_id}})
        rental.client = client;
        const product = await this.productRepository.findOne({where: {id: createRental.product_id}})
        rental.product = product;
        rental.rental_date = createRental.rental_date;
        rental.return_date = createRental.return_date;
        if (rental.return_date < rental.rental_date) 
            throw new BadRequestException('Return date must be after rental date');
        await this.rentalRepository.save(rental);
        return rental;
    }

    async findOne(Id: number){
        const rental = await this.rentalRepository.findOne({
            where:{id: Id},
            relations: {
                client: true,
                product: true
             }
        });
        return rental;
    }

    async findAll(): Promise<Rental[]>{
        const rentals = await this.rentalRepository.find({
            relations: {
                client: true,
                product: true
             }
        });
        return rentals;
    }

    async findIncomplete(): Promise<IncompleteRentalDto[]>{
        const rentals = await this.rentalRepository.find({
            relations: {
                client: true,
                product: true
             }
        });
        const incompletedRentals: IncompleteRentalDto[] = rentals.map((rental) =>{
            const incompletedRental = new IncompleteRentalDto();
            incompletedRental.client_first_name = rental.client.first_name;
            incompletedRental.client_last_name = rental.client.last_name;
            incompletedRental.product_name = rental.product.name;
            incompletedRental.rental_date = rental.rental_date;
            incompletedRental.return_date = rental.return_date
            return incompletedRental;

        });
        return incompletedRentals;
    }



    async update(Id: number, updatedRental:Rental){
        await this.rentalRepository.update(Id,
            {
                client_id: updatedRental.client_id,
                product_id: updatedRental.product_id,
                rental_date: updatedRental.rental_date,
                return_date: updatedRental.return_date
            })
            return await this.rentalRepository.findOne(
                {where: {id: Id}}
            );
    }

    async remove(id: number){
        await this.rentalRepository.delete(id);
    }
}