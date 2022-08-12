import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from'colors'
import productroute from './routes/productroutes.js'

dotenv.config()
connectDB()
const app=express()


app.get('/',(req,res)=>{
    res.send("shop app")
})

app.use('/api/products',productroute)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`backend running in ${process.env.NODE_ENV} mode on port ${ PORT}`.yellow.bold))