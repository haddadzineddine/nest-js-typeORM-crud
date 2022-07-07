import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IRepository<T> {
  store(createUserDto: CreateUserDto): Promise<T>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
  all(): Promise<T[]>;
  get(id: number): Promise<T>;
}
