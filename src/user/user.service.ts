import { Inject, Injectable } from '@nestjs/common';
import { IRepository } from 'src/shared/Repository.interface';
import { User } from './entities/user.entity';
import { Constants } from '../constants';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(Constants.USER_INTERFACE)
    private _userRepository: IRepository<User>,
  ) {}

  all(): Promise<User[]> {
    return this._userRepository.all();
  }

  get(id: number): Promise<User> {
    return this._userRepository.get(id);
  }

  store(createUserDto: CreateUserDto): Promise<User> {
    return this._userRepository.store(createUserDto);
  }

  update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this._userRepository.update(updateUserDto.id, updateUserDto);
  }

  delete(id: number): void {
    this._userRepository.delete(id);
  }
}
