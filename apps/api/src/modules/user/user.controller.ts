import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseFilters
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectIdDto } from '@utils/validations/object-id.validation';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { AuthRequestDto } from './dtos/auth-request.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserRequestDto } from './dtos/user-request.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { UserService } from './user.service';

@ApiTags('User Service')
@Controller({
    version: '1'
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/users')
    create(@Body() createUserDto: UserRequestDto) {
        return this.userService.createIfNotExists(createUserDto);
    }

    @Get('/users')
    findAll() {
        return this.userService.findAll();
    }

    @Get('/users/:id')
    findOne(@Param() { id }: ObjectIdDto): Promise<UserResponseDto> {
        return this.userService.findById(id);
    }

    @Patch('/users/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete('/users/:id')
    remove(@Param('id') { id }: ObjectIdDto) {
        return this.userService.remove(id);
    }

    @Post('/users/open-id-auth')
    signIn(@Body() createAuthDto: AuthRequestDto) {
        return this.userService.signIn(createAuthDto);
    }
}
