import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDTO } from "./dto/create-product.dto";
import { IncompleteProductDto } from "./dto/incomplete-product.dto";
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProduct: CreateProductDTO): Promise<Product>;
    findOne(Id: number): Promise<Product>;
    findAll(): Promise<Product[]>;
    findIncomplete(): Promise<IncompleteProductDto[]>;
    update(Id: number, updatedProduct: Product): Promise<Product>;
    remove(id: number): Promise<void>;
}
