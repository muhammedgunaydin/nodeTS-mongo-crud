import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

//middlewares
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
