import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags('Products')
@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get('/incomplete')
    findIncomplete(){
        return this.productsService.findIncomplete();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.productsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatedProduct: Product){
        return this.productsService.update(+id, updatedProduct);
    }

    @Post()
    @ApiBody({type: CreateProductDTO})
    create(@Body() createProduct: CreateProductDTO){
        return this.productsService.create(createProduct);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.productsService.remove(+id);
    }
}