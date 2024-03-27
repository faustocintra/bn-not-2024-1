import cookieParser from "cookie-parser"
import express, { NextFunction, Request, Response, json, urlencoded } from "express"
import 'express-async-errors'
import mongoose from "mongoose"
import logger from "morgan"
import { ZodError } from "zod"
import { env } from "./env"
import indexRouter from "./routes"
import clientRouter from "./routes/client"
import fornecedorRouter from "./routes/fornecedor"
import productRouter from "./routes/product"
import usersRouter from "./routes/users"
import vendasRouter from "./routes/vendas"
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
app.use('/fornecedores', fornecedorRouter)
app.use('/produtos', productRouter)
app.use('/vendas', vendasRouter)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'MongoServerError') {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Duplicated key", key: Object.keys(error.keyPattern)})
    }
  }
  if (error instanceof ZodError) {
    return res.status(400).json({ message: error.errors })
  }

  return res.status(500).json({ message: error.message })
})

export default app;

