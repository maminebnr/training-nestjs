import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedModule } from 'src/breed/breed.module';
import { BreedService } from 'src/breed/breed.service';
import { Breed } from 'src/breed/entities/breed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat, Breed]), BreedModule],
  controllers: [CatController],
  providers: [CatService, BreedService],
})
export class CatModule {}
