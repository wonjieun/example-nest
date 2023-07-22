import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getHello(): string {
    return 'Hello World!';
  }

  getBooks(): string {
    return `This action returns all books`;
  }

  getBook(id: string): string {
    return `This action returns a #${id} book`;
  }

  postBook(): string {
    return `This action adds a new book`;
  }

  patchBook(id: string): string {
    return `This action updates a #${id} book`;
  }

  deleteBook(id: string): string {
    return `This action removes a #${id} book`;
  }
}
