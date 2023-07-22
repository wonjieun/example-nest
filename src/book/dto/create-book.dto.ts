import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsNumber()
  readonly price: number;
}
