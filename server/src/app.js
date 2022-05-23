import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running is port ${port}`)
})