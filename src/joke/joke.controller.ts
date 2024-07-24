import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) { }

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokeService.findAll();
  }

  @Get('pending')
  findPending() {
    return this.jokeService.findPending();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokeService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokeService.remove(id);
  }
}
