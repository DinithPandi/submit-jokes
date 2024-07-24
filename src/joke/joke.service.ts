import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.schema';

@Injectable()
export class JokeService {
  constructor(
    @InjectModel(Joke.name) private jokeModel: Model<Joke>,
  ) {}

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

  findOne(id: string): Promise<Joke> {
    return this.jokeModel.findById(id).exec();
  }

  async remove(id: string): Promise<void> {
    await this.jokeModel.findByIdAndDelete(id).exec();
  }
}
