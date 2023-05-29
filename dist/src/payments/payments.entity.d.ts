import { Rental } from "src/rentals/rentals.entity";
export declare class Payment {
    id: number;
    rental_id: number;
    amount: number;
    payment_date: Date;
    rental: Rental;
}
