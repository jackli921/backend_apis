import { Request, Response } from "express";

class MyController {
    public static handleRequest(req: Request, res: Response):void {
        res.send("hello there!")
    }
}

export default MyController;