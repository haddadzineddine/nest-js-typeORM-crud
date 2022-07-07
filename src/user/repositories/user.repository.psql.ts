import { Inject, Injectable } from '@nestjs/common';
import { Constants } from '../../constants';
import { IRepository } from 'src/shared/Repository.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepositoryPsql implements IRepository<User> {
  constructor(
    @Inject(Constants.USER_REPOSITORY)
    private usersRepository: Repository<User>,
  ) {}

  all(): Promise<User[]> {
    return this.usersRepository.find();
  }

  get(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  store(createUserDto: User): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(updateUserDto.id, updateUserDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
