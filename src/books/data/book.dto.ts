import { IsInt , IsString} from "class-validator"

export class Book {

    @IsString()
    id : string

    @IsString()
    title : string 

    @IsString()
    authour : string 

    @IsString()
    published : string 

}