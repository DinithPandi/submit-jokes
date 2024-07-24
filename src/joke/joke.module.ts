import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { Joke, JokeSchema } from './entities/joke.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }])],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
