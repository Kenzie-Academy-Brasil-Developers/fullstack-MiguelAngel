import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
AppDataSource.initialize()
  .then(() => {
    configDocumentation();
    function configDocumentation(): void {
      app.use(express.static("doc"));
      app.use("/", (_req: Request, res: Response) => {
        res.render("index.html");
      });
    }

    console.log("Database connected!");

    const port = 3000;

    app.listen(port, () => {
      console.log(`server is running: ${port}`);
      console.log("documentação, abra o link =>: http://localhost:3000/");
    });
  })
  .catch((err) => {
    console.log(err);
  });
