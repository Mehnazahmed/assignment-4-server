import cors from "cors";

import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";

const app: Application = express();

//parsers
app.use(express.json());

app.use(
  cors({
    origin: "https://assignment-4-client.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// application routes
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Assignment-4");
});

app.use(globalErrorHandler); // This is connected with the globalErrorhandler.ts file at the middleware folder.

//Not Found
app.use(notFound); // This is connected with the notFound.ts file at the middleware folder.

export default app;
