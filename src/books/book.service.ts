import { Injectable } from '@nestjs/common';
import {Book} from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService {
    public books: Book[] = []

    //add books 
    addBookServices (book : Book) : string {

        book.id = uuidv4()
        this.books.push(book)
        return "book added sucessfully"
    }

    //update book 
    updateBookServices (book : Book) : string {
        let index = this.books.findIndex ((currentBook) => {
           return currentBook.id == book.id;
        })

        this.books[index] = book

        return "book have been updated sucessfully"
    }

    //delete book
    deleteBookService (bookId : string) : string {
        this.books = this.books.filter((book)=>{
           return book.id != bookId
        });

        return "book deleted sucessfullly"
    }

    //find all books 
    findAllBooksService () : Book[] {
        return this.books
    }
}

