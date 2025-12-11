import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'User email' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'User password' })
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty({ example: 'John Doe', description: 'User name' })
    @IsString()
    @IsNotEmpty()
    name: string;
}
