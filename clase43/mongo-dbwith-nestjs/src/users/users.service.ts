import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.usersModel.find();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.usersModel.findByIdAndUpdate(id, updateUserDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.usersModel.findByIdAndDelete(id);
    return result;
  }
}
