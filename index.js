const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/movies')
const {genreRouter}=require('./routes/genres')
const Joi=require("joi")
Joi.objectId=require("joi-objectid")(Joi)
mongoose.connect("mongodb://localhost:27017/playground")
.then(()=>console.log("Connected to MongoDB..."))
.catch((err)=>console.log(err))

const app=express();
const PORT=process.env.PORT||3000
app.use(express.json());
app.use('/movies',router)
app.use('/genres',genreRouter)
app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))