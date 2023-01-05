const express = require('express');
require('dotenv').config()
const cors = require('cors');
const {} = require('./routes/routes');
const router = require('./routes/routes');
const mongoose = require("mongoose");

const port = process.env.PORT ||5000

// create  an  express  app 

const app = express()
app.use(express.json())
app.use(cors())



// connection with mongodb server
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI , {
    dbName: `skyFly`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 

  })
.then(()=>{
    console.log('database connection successful')
})
.catch(err => console.error(err.message))


// call all routyer

app.use("/", router);




// listen to the sserver port

app.listen(port,()=>console.log('listening on port',port))