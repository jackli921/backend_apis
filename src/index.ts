import log from "./logger"
import MyController from "@controller/my"
import  express, { Express, Request, Response } from "express"

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("hello Daven!!");
    log("hello");
})

app.get("/my-endpoint", MyController.handleRequest);

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})