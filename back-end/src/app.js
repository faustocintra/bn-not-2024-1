import dotenv from "dotenv";
dotenv.config(); //Carrega as variáeis do arquivo .env no objeto global process.env

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE_URL);

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

/************************************* 
ROTAS
**************************************/

import clienteRouter from './routes/cliente.js'
app.use('/clientes', clienteRouter)


export default app;
