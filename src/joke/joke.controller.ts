import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) { }

  @Post('submit')
  async create(@Body() createJokeDto: CreateJokeDto) {
    const joke = await this.jokeService.create(createJokeDto);
    return { success: !!joke };
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
