import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      password: createUserDto.password,
      avatar: createUserDto.avatar,
    };

    this.users.push(newUser);

    return {
      message: 'User created',
      newUser,
    };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const newUser: User = {
      id,
      first_name: updateUserDto.first_name,
      last_name: updateUserDto.last_name,
      email: updateUserDto.email,
      password: updateUserDto.password,
      avatar: updateUserDto.avatar,
    };

    this.users[id - 1] = newUser;

    return {
      message: 'User updated',
      user: this.users[id - 1],
    };
  }

  remove(id: number) {
    this.users.splice(id - 1, 1);

    return {
      message: 'User deleted',
    };
  }
}
