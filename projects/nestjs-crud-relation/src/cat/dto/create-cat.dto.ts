import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsString()
  breedName: string;
}
