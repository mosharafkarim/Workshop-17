const express=require('express')
const dotenv=require('dotenv')
const bootcamp=require('./router/bootcamps')

//load env file
dotenv.config({path: './config/config.env'})

const app = express()

app.use('/api/bootcamps',bootcamp)

const logger = (req,res,next)=>{
    req.hello='Hello World'
    console.log('Middileware run...')
    next()
}

app.use(logger)

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} on port number  ${PORT}`))
