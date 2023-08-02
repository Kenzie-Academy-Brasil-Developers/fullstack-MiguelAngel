import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrors } from "./error";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", userRoutes);

app.use(handleErrors);
export default app;
