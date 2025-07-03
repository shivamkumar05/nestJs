import { Module } from '@nestjs/common';
import { BookService } from './books/book.service';
import { BookModule } from './books/book.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [BookModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
