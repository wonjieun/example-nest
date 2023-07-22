import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { BookModule } from './book/book.module';
import { AppController } from './app.controller';

@Module({
  imports: [CommentModule, BookModule],
  controllers: [AppController],
  providers: [],
})
// root module
export class AppModule {}
