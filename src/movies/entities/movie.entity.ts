import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('movies')
export class Movie {
    @ApiProperty({ example: 1, description: 'The unique identifier of the movie' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Inception', description: 'The title of the movie' })
    @Column()
    title: string;

    @ApiProperty({ example: 'A mind-bending thriller', description: 'Description of the movie' })
    @Column('text')
    description: string;

    @ApiProperty({ example: '2010-07-16', description: 'Release date of the movie' })
    @Column({ type: 'date' })
    release_date: string;

    @ApiProperty({ example: 'Christopher Nolan', description: 'Director of the movie' })
    @Column()
    director: string;

    @ApiProperty({ example: 8.8, description: 'Rating of the movie' })
    @Column({ type: 'float', default: 0 })
    rating: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
