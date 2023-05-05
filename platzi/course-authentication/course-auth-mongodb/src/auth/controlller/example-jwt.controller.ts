import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/database/entities/user.entity';
import { AuthService } from '../services/auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../model/roles.model';
import { RolesGuard } from '../guards/roles/roles.guard';


// All the endpoint, will used this strategy 
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('example-jwt')
export class ExampleJwtController {

    constructor(private authService: AuthService) {}


    @Roles(Role.ADMIN)
    //@Public()// all request always pass whe is Public 
    @Post('jwt')
    login(@Req() req: Request) {
      console.log('-----{}',req.user);
      
      const user = req.user as User;
      return `send info example about user, ${JSON.stringify(user)}` ;
    }

}
