import { RentalsService } from "./rentals.service";
import { Rental } from "./rentals.entity";
import { CreateRentalDTO } from "./dto/rentalDTO";
export declare class RentalsController {
    private readonly rentalsService;
    constructor(rentalsService: RentalsService);
    findAll(): Promise<Rental[]>;
    findIncomplete(): Promise<import("./dto/incomplete-rental.dto").IncompleteRentalDto[]>;
    findOne(id: string): Promise<Rental>;
    update(id: string, updatedRental: Rental): Promise<Rental>;
    create(createRental: CreateRentalDTO): Promise<Rental>;
    remove(id: string): Promise<void>;
}
