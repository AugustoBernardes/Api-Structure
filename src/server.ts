import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express';
import 'express-async-errors';

dotenv.config()


import { errorHandler } from './middlewares/error.handler'

import Routes from './routes';

// Variables
const PORT = process.env.PORT || 3000

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

app.use('/',Routes)

// Handling errors
app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})