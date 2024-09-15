import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Med amine' })
  name: string;

  @ApiProperty({ example: 'med@test.com' })
  email: string;

  @ApiProperty({ example: 25 })
  age: number;
}
