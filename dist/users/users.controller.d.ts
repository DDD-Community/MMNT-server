import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { SendCodeDto } from './dtos/send-code.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    certificateUser(body: CreateUserDto): Promise<SendCodeDto>;
    createUser(body: CreateUserDto): void;
    findUser(userIdx: string): Promise<void>;
}