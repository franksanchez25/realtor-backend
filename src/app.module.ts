import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities:true,
      synchronize:true
    })
    ,
    AuthModule, 
    ListingModule,
  ],
})
export class AppModule {
}
