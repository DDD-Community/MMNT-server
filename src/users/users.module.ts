import {  CacheModule, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/users/strategy/jwt.strategy';
import { jwtConfig } from 'src/configs/jwt.config';


import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PinsModule } from 'src/pins/pins.module';
import { MomentsService } from 'src/moments/moments.service';
import { MomentsModule } from 'src/moments/moments.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(jwtConfig),
    CacheModule.register(),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    JwtStrategy,
  ],
  exports: [
    UsersService,
    JwtStrategy,
    PassportModule,
    JwtModule,
    
  ]
})
export class UsersModule {}
