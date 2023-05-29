import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { RentalsModule } from './rentals/rentals.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [ClientsModule,ProductsModule, RentalsModule, PaymentsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5432,
    database:'coursework',
    username: 'postgres',
    password: 'postgres',
    host:'localhost',
    synchronize: false,
    logging: 'all',
    entities: ['dist/**/*.entity{.ts,.js}']
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
