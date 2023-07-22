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
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Book[] {
    return this.bookService.getBooks();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Book {
    console.log(`🤖 > BookController > findOne > id:`, id);
    return this.bookService.getBook(id);
  }

  @Post()
  postBook(@Body() book: CreateBookDto) {
    this.bookService.postBook(book);
    return;
  }

  @Patch(':id')
  patchBook(@Param('id') id: number, @Body() book: UpdateBookDto): Book {
    return this.bookService.patchBook(id, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number) {
    this.bookService.deleteBook(id);
    return;
  }
}
