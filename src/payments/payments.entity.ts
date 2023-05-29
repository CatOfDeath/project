import { Rental } from "src/rentals/rentals.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class Payment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rental_id: number;

    @Column()
    amount: number;

    @Column()
    payment_date: Date;

    @OneToOne(() => Rental, (rental) => rental.id)
    @JoinColumn({name : 'rental_id'})
    rental: Rental

    
    
}