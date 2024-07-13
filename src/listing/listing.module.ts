import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
import { listingImage } from './entities/listing.image';

@Module({
  controllers: [ListingController],
  providers: [ListingService],
  imports:[
    TypeOrmModule.forFeature(
      [Listing,
        listingImage
      ]
    )
  ]
})
export class ListingModule {}
