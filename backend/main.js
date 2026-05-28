import cookieParser from "cookie-parser"
import express from "express"
import dotenv from "dotenv"

import authRouter from "./src/modules/auth/auth.router.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cookieParser())
// Rotas
app.use("/auth", authRouter)

app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT)
})