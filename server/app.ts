import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import { engine } from 'express-handlebars'
import userRoute from './routers/user' 

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Static Files
app.use(express.static('public'))

// Templating Engine
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')


// import all the routes 
app.use('/', userRoute)

export default app;