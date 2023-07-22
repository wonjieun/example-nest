import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

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
  findOne(@Param('id') id: string): Book {
    console.log(`🤖 > BookController > findOne > id:`, id);
    return this.bookService.getBook(id);
  }

  @Post('/book')
  postBook() {
    this.bookService.postBook();
    return;
  }

  @Patch('/book/:id')
  patchBook(@Param('id') id: string): Book {
    return this.bookService.patchBook(id);
  }

  @Delete('/book/:id')
  deleteBook(@Param('id') id: string) {
    this.bookService.deleteBook(id);
    return;
  }
}
