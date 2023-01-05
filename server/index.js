const express = require('express');
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT ||5000

// make an  express  app 

const app = express();






// listen to the sserver port

app.listen(port,()=>console.log('listening on port',port))