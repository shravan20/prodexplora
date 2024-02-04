import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { AuthRequestDto } from './dto/auth-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/users')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createIfNotExists(createUserDto);
    }

    @Get('/users')
    findAll() {
        return this.userService.findAll();
    }

    @Get('/users/:id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Patch('/users/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete('/users/:id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }

    @Post('/users/open-id-auth')
    signIn(@Body() createAuthDto: AuthRequestDto) {
        return this.userService.signIn(createAuthDto);
    }
}
