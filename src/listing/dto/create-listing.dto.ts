import { IsArray, IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateListingDto {

    @IsString()
    @MinLength(5)
     title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @MinLength(5)
    address:string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    bathroom: number;

    @IsNumber()
    @IsPositive()
    bedroom: number;

    @IsBoolean()
    @IsOptional()
    sale?:boolean

    @IsBoolean()
    @IsOptional()
    rent?: boolean
    
    @IsBoolean()
    @IsOptional()
    parking?: boolean

    @IsString()
    @MinLength(5)
    property_type: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    amenitie?: string [];

    @IsBoolean()
    @IsOptional()
    offer?: boolean;

}
