import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.schema';

@Injectable()
export class JokeService {
    constructor(
        @InjectModel(Joke.name) private jokeModel: Model<Joke>,
    ) { }

    create(createJokeDto: CreateJokeDto): Promise<Joke> {
        const joke = new this.jokeModel(createJokeDto);
        return joke.save();
    }

    findAll(): Promise<Joke[]> {
        return this.jokeModel.find().exec();
    }

    findPending(): Promise<Joke[]> {
        return this.jokeModel.find({ approved: false }).exec();
    }

    async findOne(id: string): Promise<Joke> {
        const joke = await this.jokeModel.findById(id).exec();
        if (!joke) {
            throw new NotFoundException(`Joke with ID ${id} not found`);
        }
        return joke;
    }

    async remove(id: string): Promise<void> {
        const result = await this.jokeModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Joke with ID ${id} not found`);
        }
    }
}