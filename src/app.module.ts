import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeModule } from "./joke/joke.module";
import { JokeService } from './joke/joke.service';
import { Joke, JokeSchema } from './joke/entities/joke.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
    JokeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
