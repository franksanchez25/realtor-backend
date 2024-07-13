import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { listingImage } from './listing.image';

@Entity()
export class Listing {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({
        type: 'text',
        nullable:true
    })
    description: string;

    @Column()
    address:string;
    
    @Column('decimal',{
        default:0
    })
    price: number;
    
    @Column()
    bathroom: number;

    @Column()
    bedroom: number;

    @Column({
        type: 'boolean',
        nullable:true
    })
    sale:boolean

    @Column({
        type: 'boolean',
        nullable:true
    })
    rent: boolean
    
    @Column()
    parking: boolean

    @Column()
    property_type:  string;

    @Column('text', {
        unique: true
    })
    slug: string;

    @Column('text',{
        array:true,
        nullable:true
    })
    amenities: string [];

    @Column('boolean',{
        nullable:true
    })
    offer: boolean



    @OneToMany( 
        ()=> listingImage, 
        (listingImages)=> listingImages.listing,{
            cascade:true,
            eager: true
        } 
    )
    images?: listingImage [];

}
