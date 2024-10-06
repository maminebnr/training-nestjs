import { Cat } from 'src/cat/entities/cat.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Cat, (cat) => cat.breed)
  cats: Cat[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updadet_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
