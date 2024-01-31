import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';

@ApiTags('User Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/users/:id')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
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
}
