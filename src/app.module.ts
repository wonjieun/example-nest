import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [CommentModule],
  controllers: [BookController],
  providers: [BookService],
})
// root module
export class AppModule {}
