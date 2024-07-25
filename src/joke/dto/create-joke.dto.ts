import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsBoolean()
  approved: boolean;
}
