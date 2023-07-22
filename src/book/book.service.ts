import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  private books: Book[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book #${id} not found`);
    }
    return book;
  }

  postBook(book: CreateBookDto) {
    this.books.push({
      id: this.books.length + 1,
      ...book,
    });
  }

  patchBook(id: number, book: CreateBookDto): Book {
    this.getBook(id);
    this.deleteBook(id);
    this.postBook(book);
    return this.books.find((book) => book.id === id);
  }

  deleteBook(id: number) {
    this.getBook(id);
    this.books = this.books.filter((book) => book.id !== id);
  }
}
