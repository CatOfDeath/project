import { Client } from "src/clients/clients.entity";
import { Product } from "src/products/products.entity";
export declare class Rental {
    id: number;
    client_id: number;
    product_id: number;
    client: Client;
    product: Product;
    rental_date: Date;
    return_date: Date;
}
