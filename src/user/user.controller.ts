import { CreateUserDto } from '@app/user/dto/create-user.dto';
import { UserEntity } from '@app/user/user.entity';
import { UserService } from '@app/user/user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserDto);
  }
}
