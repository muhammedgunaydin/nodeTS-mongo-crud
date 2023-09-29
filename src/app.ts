import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'
import bookRouter from '../src/routes/bookRouter'

const app = express()

mongoose.connect('mongodb://localhost:27017/bookDB').then(() => {
  console.log('MongoDB connected')
})

//middlewares
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/api/book', bookRouter)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
