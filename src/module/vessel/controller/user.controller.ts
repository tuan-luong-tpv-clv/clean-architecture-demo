import { Controller, Get, Inject } from '@nestjs/common';
import { IUserService } from '../domain/interfaces/user.interface';
import { PROVIDER_KEY } from '../constant/common.constant';

@Controller('vessel')
export class UserController {
  constructor(
    @Inject(PROVIDER_KEY.USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @Get()
  getListUser(): string {
    return this.userService.getListUser();
  }
}
