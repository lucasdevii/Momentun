import cookieParser from "cookie-parser"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRouter from "./src/modules/auth/auth.router.js"
import userRouter from "./src/modules/user/user.router.js"
import projectRouter from "./src/modules/project/project.router.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
// Rotas
app.use("/api/auth", authRouter)
app.use("/api/project", projectRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT)
})