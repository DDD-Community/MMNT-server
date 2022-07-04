import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private repo;
    private jwtService;
    constructor(repo: Repository<User>, jwtService: JwtService);
    createUser(email: string, password: string): Promise<User>;
    signIn(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    findOne(userIdx: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(userIdx: number, attrs: Partial<User>): Promise<User>;
    remove(userIdx: number): Promise<User>;
}
