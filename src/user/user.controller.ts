import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //create new user
  @Post()
  createUser(@Body() userDto: CreateUserDto): User {
    return this.userService.createUser(userDto);
  }

 

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(+id);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

}
