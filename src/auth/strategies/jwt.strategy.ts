import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtPayload } from "../interfaces/JwtPayload";
import { UnauthorizedException } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy){



    constructor( 

        @InjectRepository(User)
        private readonly userRepository: Repository<User>

    ){
        super();
    }

    async validate (payload: JwtPayload) : Promise<User>  {

        const {id} = payload;

        const user =  await this.userRepository.findOneBy({id});


          if (!user) 
            throw new UnauthorizedException('Invalid token');
        if (!user.isActive) 
            throw new UnauthorizedException('User is inactive, contact with admin')


        return user;
    }

}