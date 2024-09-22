import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UpdateUserDto): User {
    return this.userService.updateUser(+id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    return this.userService.deleteUser(+id);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }
}
