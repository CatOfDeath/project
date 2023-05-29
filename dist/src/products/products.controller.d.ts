import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { CreateProductDTO } from "./dto/create-product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findIncomplete(): Promise<import("./dto/incomplete-product.dto").IncompleteProductDto[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updatedProduct: Product): Promise<Product>;
    create(createProduct: CreateProductDTO): Promise<Product>;
    remove(id: string): Promise<void>;
}
