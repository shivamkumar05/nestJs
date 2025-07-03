import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";


export class BookException extends HttpException{
    constructor () {
        super ('this is my custom book exception' , HttpStatus.BAD_REQUEST)
    }
}