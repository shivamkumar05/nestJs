import { BadRequestException, Body, Controller, Delete, Get, Param, ParseBoolPipe, Post, Put, UseFilters, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./book.pipe";
import { BookException } from "./book.exception";
import { BookExceptionFilter } from "./book.exception.filter";

@Controller('book')
export class Bookcontroller {
    constructor (private bookService : BookService) {

    }


    @Get('/findAll')
    @UseFilters(BookExceptionFilter)
    findAllBooks () : Book[] {
        throw new BadRequestException()
        return this.bookService.findAllBooksService();
    }

    @Put('/update')
    updateBook(@Body() book : Book) : string {
        return this.bookService.updateBookServices(book);
    }

    @Delete('/delete/:id')
    deleteBook (@Param( "id", ParseBoolPipe) id:string ) : string {
        console.log("id", typeof(id));
        return this.bookService.deleteBookService(id);
    }

    // @Post('/add')
    // addBook (@Body(new BookPipe) book : Book ) : string {
    //     return this.bookService.addBookServices(book);
    // }

    @Post('/add')
    addBook (@Body(new ValidationPipe()) book : Book ) : string {
        return this.bookService.addBookServices(book);
    }
}