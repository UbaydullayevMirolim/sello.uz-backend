import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { User } from 'src/infra/entities/user.entity';
import { UserRepo } from 'src/infra/repositories/user.repo';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repo: UserRepo) {}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  async findAll() {
    try {
      const data = await this.repo.find({
        relations: ['basket', 'favorites', 'orders', 'notifications'],
      });
      return { data };
    } catch (error) {
      return { message: error.message };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repo.findOne({
        where: { id },
        relations: ['basket', 'favorites', 'orders', 'notifications'],
      });
      return { data };
    } catch (error) {
      return { message: error.message };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { image, username, phoneNumber, email, birth_day } =
        updateUserDto;
      await this.repo.update(
        { id },
        { image, username, phoneNumber, email, birth_day },
      );
      return { message: 'Updated user' };
    } catch (error) {
      return { message: error.message };
    }
  }

  async remove(id: number) {
    try {
      await this.repo.delete(id);
      return { message: 'Deleted user' };
    } catch (error) {
      return { message: error.message };
    }
  }
}
