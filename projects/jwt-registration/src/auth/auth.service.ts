import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const { password, email, name } = registerDto;

    const user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('email already in use');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await this.userService.create({ name, email, password: hashedPassword });

    return { message: 'user created successfully' };
  }
}
