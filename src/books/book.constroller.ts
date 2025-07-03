import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class Bookcontroller {
    constructor (private bookService : BookService) {

    }


    @Get('/findAll')
    findAllBooks () : Book[] {
        return this.bookService.findAllBooksService();
    }

    @Put('/update')
    updateBook(@Body() book : Book) : string {
        return this.bookService.updateBookServices(book);
    }

    @Delete('/delete/:id')
    deleteBook (@Param("id") bookId:string ) : string {
        return this.bookService.deleteBookService(bookId);
    }

    @Post('/add')
    addBook (@Body() book : Book ) : string {
        return this.bookService.addBookServices(book);
    }
}