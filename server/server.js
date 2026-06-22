import express from 'express'

import dotenv from 'dotenv'
import eventsRouter from './routes/events.js'
// import the router from your routes file


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())



// specify the api path for the server to use
app.use('/api',eventsRouter)

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})