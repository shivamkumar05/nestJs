import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import {Book} from './data/book.dto'




export class BookPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {

        const bookClass = plainToInstance(Book, value)

        const error = await validate(bookClass)

        if(error.length > 0) {
            throw new BadRequestException ("validatiion failed" + JSON.stringify(error))
        }

        console.log(value, typeof(value));
        return value;

    }

}