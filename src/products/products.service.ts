import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { CreateProductDTO } from "./dto/create-product.dto";
import { IncompleteProductDto } from "./dto/incomplete-product.dto";

@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>){}

    async create(createProduct: CreateProductDTO): Promise<Product>
    {
        const product = this.productRepository.create();
        product.name = createProduct.name;
        product.type = createProduct.type;
        product.quantity = createProduct.quantity;
        product.price = createProduct.price;
        if(product.quantity < 0)
            throw new BadRequestException('Quantity cannot be a negative number');
        await this.productRepository.save(product);
        return product;
    }

    async findOne(Id: number): Promise<Product>
    {
        return this.productRepository.findOne({
            where: {id: Id}
        });
    }

    async findAll(): Promise<Product[]>
    {
        const products = await this.productRepository.find();
        return products;
    }

    async findIncomplete(): Promise<IncompleteProductDto[]>
    {
        const products = await this.productRepository.find();
        const incompleteProducts: IncompleteProductDto[] = products.map((product) =>
        {
            const incompleteProduct = new IncompleteProductDto();
            incompleteProduct.name_product = product.name;
            incompleteProduct.type_product = product.type;
            incompleteProduct.price = product.price;
            return incompleteProduct;
        }
        );
        return incompleteProducts;
    }

    async update(Id: number, updatedProduct: Product){
        await this.productRepository.update(Id,{
            name: updatedProduct.name,
            type: updatedProduct.type,
            quantity: updatedProduct.quantity,
            price:updatedProduct.price
        });
        return this.productRepository.findOne({
            where: {id: Id}
        });;
    }

    async remove(id: number){
        await this.productRepository.delete(id);
    }
}