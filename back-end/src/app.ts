import cookieParser from "cookie-parser"
import express, { json, urlencoded } from "express"
import logger from "morgan"

import mongoose from "mongoose"
import { env } from "./env"
import indexRouter from "./routes"
import clientRouter from "./routes/client"
import usersRouter from "./routes/users"

const app = express();

mongoose.connect(env.DATABASE_URL).then(() => {
  console.log("Connected to database")
}).catch((error) => {
  console.error("Error connecting to database: ", error)
})


app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/clientes', clientRouter)

export default app;

