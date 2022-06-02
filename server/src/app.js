import express from 'express'
import morgan from 'morgan'
import routes from './routes'
import { connectDB } from './lib/mongodb'

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(port, () => {
    console.log(`[Server] is running is port ${port}`)
})