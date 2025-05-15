import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);              // routes é um Router, não uma função

export default app;
