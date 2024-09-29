/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  //create a new user
  createUser(userDto: CreateUserDto): User {
    const newUser: User = {
      id: this.nextId++,
      ...userDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  //get all users
  findAll(): User[] {
    return this.users;
  }

  //get user by Id 
  findOne(id: number): User {
    console.log(id);
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  //update user By Id 
  updateUser(id:number,updateUserDto:UpdateUserDto):User{
    const user = this.findOne(id)
    const newUser = Object.assign(user,updateUserDto)
    return newUser

  }

  //delet user by id 
  deleteUser(id:number):void{
    const index = this.users.findIndex((user)=>user.id === id)
    if(index === -1){
      throw new NotFoundException('user not found')
    }
    this.users.splice(index,1)
  }
}
