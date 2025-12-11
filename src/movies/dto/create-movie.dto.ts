import { IsString, IsNotEmpty, IsDateString, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
    @ApiProperty({ example: 'Inception', description: 'The title of the movie' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'A mind-bending thriller', description: 'Description of the movie' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: '2010-07-16', description: 'Release date of the movie (YYYY-MM-DD)' })
    @IsDateString()
    release_date: string;

    @ApiProperty({ example: 'Christopher Nolan', description: 'Director of the movie' })
    @IsString()
    @IsNotEmpty()
    director: string;

    @ApiProperty({ example: 8.8, description: 'Rating of the movie (0-10)', required: false })
    @IsNumber()
    @Min(0)
    @Max(10)
    rating: number;
}
