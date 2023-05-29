import { Client } from "src/clients/clients.entity";
import { Product } from "src/products/products.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('rentals')
export class Rental{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    product_id: number;

    @ManyToOne(() => Client, (client) => client.id)
    @JoinColumn({name: 'id'})
    client: Client;

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: 'id'})
    product: Product;

    @Column()
    rental_date: Date;

    @Column()
    return_date: Date;
    
}