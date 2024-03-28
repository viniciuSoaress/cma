import express from "express";
import cors from 'cors'
import userRouter from "../routers/user";
import partRouter from "../routers/part";
import clientRouter from "../routers/client";
import budgetRouter from "../routers/budget";

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
server.use('/part', partRouter)
server.use('/client', clientRouter)
server.use('/budget', budgetRouter)

server.listen(port, () => {
  console.log(`server in running, URL: http://localhost:${port}`)
})