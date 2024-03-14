import express from "express";
import cors from 'cors'
import userRouter from "../routers/user";

const server = express()
const port = process.env.PORT || 8182

server.use(express.json())
server.use(cors())

server.get('/cma', (_, res) => {
  res.send({
    mesaage: "hello, world!"
  })
})

server.use('/user', userRouter)

server.listen(port, () => {
  console.log(`server in running, URL: http://localhost:${port}`)
})