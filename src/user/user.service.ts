import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger } from '@nestjs/common';
import { CreateUserDto } from './Dto/createUser.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Check if the user already exists
    const userExists = false; // <-- Replace with the findByEmail method
    if (userExists) {
      this.logger.log('User already exists');
      return {
        success: false,
        code: 400,
        message: 'User already exists',
      };
    }

    
  }
}
