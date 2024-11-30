import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./db.js";

const app = express();
app.use(cors({ origin: true, methods: "GET,PUT,POST,DELETE" }));
app.options("*", cors("*"));
app.use(cors("*"));
app.use(express.json());
dotenv.config({ path: ".env" });
connectDatabase();

export { app };
