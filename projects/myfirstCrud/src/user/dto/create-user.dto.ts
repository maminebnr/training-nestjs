import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'med amine' })
  name: string;
  @ApiProperty({ example: 'med@gmail.com' })
  email: string;
  @ApiProperty({ example: 'password123' })
  password: string;
}
