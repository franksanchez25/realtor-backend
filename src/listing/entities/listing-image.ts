import { IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Listing } from "./listing.entity";

@Entity({name: "listing_images"})
export class listingImage {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column('text')
    url: string;

    @ManyToOne( 
        ()=> Listing, 
        (listing)=> listing.images,
        {
            onDelete:'CASCADE'
        } 
    )
    listing: Listing
}