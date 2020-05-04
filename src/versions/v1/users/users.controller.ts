import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from 'src/common/user/user.service';
import { User } from 'src/common/user/user.entity';
import { CreateUserDto } from 'src/common/user/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) userId: number): Promise<User> {
    return this.usersService.findById(userId);
  }

  @Post()
  async signup(@Body() dto: CreateUserDto): Promise<User> {
    const { email, login, password } = dto;
    return this.usersService.createUser(email, login, password);
  }
}
