import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../domain/interfaces/user.interface';
import { PROVIDER_KEY } from '../constant/common.constant';
@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(PROVIDER_KEY.USER_REPOSITORY)
    private readonly userRepository: IUserService,
  ) {}
  getListUser(): any {
    return this.userRepository.getListUser();
  }
  findOneById(id: string | number) {
    throw new Error('Method not implemented.');
  }
}
