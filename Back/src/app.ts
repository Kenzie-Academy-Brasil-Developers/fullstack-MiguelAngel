import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrors } from "./error";

const app = express();
app.use(cors());

app.use(express.json());

app.use(handleErrors);
export default app;
