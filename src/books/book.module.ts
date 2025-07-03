import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { Bookcontroller } from "./book.constroller";
import { BookService } from "./book.service";
import { BookMiddleware } from "./book.middleware";

@Module({
    imports: [],
    controllers: [Bookcontroller],
    providers: [BookService],
})


export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleware).forRoutes('book')        
    }

}