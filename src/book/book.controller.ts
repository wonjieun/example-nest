import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getHello(): string {
    return this.bookService.getHello();
  }

  @Get('/book')
  findAll(): Book[] {
    return this.bookService.getBooks();
  }

  @Get('/book/:id')
  findOne(@Param('id') id: number): Book {
    console.log(`🤖 > BookController > findOne > id:`, id);
    return this.bookService.getBook(id);
  }

  @Post('/book')
  postBook(@Body() book: CreateBookDto) {
    this.bookService.postBook(book);
    return;
  }

  @Patch('/book/:id')
  patchBook(@Param('id') id: number, @Body() book: CreateBookDto): Book {
    return this.bookService.patchBook(id, book);
  }

  @Delete('/book/:id')
  deleteBook(@Param('id') id: number) {
    this.bookService.deleteBook(id);
    return;
  }
}
