import { Controller } from '../decorators/controller.decorator';
import { Get, Post } from '../decorators/route.decorator';

@Controller('/users')
export class UserController {
  @Get('/')
  findAll(req: any, res: any) {
    res.send('Get all users');
  }

  @Post('/')
  create(req: any, res: any) {
    res.send('Create a new user');
  }
}
