import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from './interfaces/JwtPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {


  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){

  }

  async register(createUserDto: CreateUserDto){

    const {password, ...userProperty } = createUserDto;

    const user = this.userRepository.create({
      ...userProperty,
      password: bcrypt.hashSync(password,10)
    })
    

    await this.userRepository.save(user);

    delete user.password

    return {
      user
    }

  }

  async login(loginUserDto: LoginUserDto) {

     const { email } = loginUserDto;

     const user = await this.userRepository.findOne({
       where: {email},
       select: {email: true, password:true, id: true, isActive:true}
       })

    
     if (!user) 
        throw new NotFoundException(' Invalid Credential (Email) ')
     

     if (!user.isActive) 
        throw new BadRequestException(' User not active ')
     

     if ( ! bcrypt.compareSync(loginUserDto.password, user.password)) 
        throw new UnauthorizedException('Invalid Credential');
  
     const token = this.getJwt({id: user.id})

    return {...user,
            token: token 
    };

  }


  private  getJwt (payload: JwtPayload){

    const token = this.jwtService.sign(payload);

    return token;

  }

}
