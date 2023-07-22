import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getHello(): string {
    return this.bookService.getHello();
  }

  @Get('/book')
  findAll(): string {
    return this.bookService.getBooks();
  }

  @Get('/book/:id')
  findOne(@Param() id: string): string {
    console.log(`🤖 > BookController > findOne > id:`, id);
    return this.bookService.getBook(id);
  }

  @Post('/book')
  postBook(): string {
    return this.bookService.postBook();
  }

  @Patch('/book/:id')
  patchBook(@Param() id: string): string {
    return this.bookService.patchBook(id);
  }

  @Delete('/book/:id')
  deleteBook(@Param() id: string): string {
    return this.bookService.deleteBook(id);
  }
}
