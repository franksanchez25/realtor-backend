import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListingService {


  constructor(
    @InjectRepository(Listing)

    private readonly listingRepository: Repository<Listing>,

  ){

  }

  async create(createListingDto: CreateListingDto) {

    try {

      const listing = this.listingRepository.create(createListingDto);

      this.listingRepository.save(listing);


      
    } catch (error) {
      
    }

    return 'This action adds a new listing';
  }

  findAll() {
    return `This action returns all listing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listing`;
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
