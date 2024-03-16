import cookieParser from "cookie-parser"
import express, { json, urlencoded } from "express"
import logger from "morgan"

import indexRouter from "./routes"
import usersRouter from "./routes/users"
import clientRouter from "./routes/client"

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/clientes', clientRouter)

export default app;
