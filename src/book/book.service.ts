import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: string): Book {
    return this.books.find((book) => book.id === id);
  }

  postBook() {
    this.books.push({
      id: '1',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: 9.99,
    });
  }

  patchBook(id: string): Book {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        book.title = 'The Lord of the Rings: The Fellowship of the Ring';
      }
      return book;
    });
    return this.books.find((book) => book.id === id);
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
    return `This action removes a #${id} book`;
  }
}
