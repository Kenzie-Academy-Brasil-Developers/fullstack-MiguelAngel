import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    const port = 3000;

    app.listen(port, () => {
      console.log(`server is running: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
