import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { IUserService } from '../../domain/interfaces/user.interface';
export class UserRepository implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userService: Repository<User>,
  ) {}
  getListUser(): any {
    return this.userService.find();
  }
  findOneById(id: string | number) {
    throw new Error('Method not implemented.');
  }
  update(id: string | number, data: any) {
    throw new Error('Method not implemented.');
  }
}
