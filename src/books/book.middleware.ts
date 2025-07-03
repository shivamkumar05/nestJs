import { NestMiddleware, NestModule } from "@nestjs/common";
import { NextFunction , Request, Response} from "express";

export class BookMiddleware implements NestMiddleware{
    use(req: Request , res:Response, next: NextFunction) {
        let protocol = req.protocol;
        let host = req.get("host");
        let url = req.originalUrl;
        let method = req.method;

        console.log("class middleware for book module", protocol , host, url, method);
        next();
    }

}