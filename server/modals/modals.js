const mongoose = require('mongoose');



const roomSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    
        
      }, 
      category: {
        type: String,
        required: true,

        
      }, 

      img: {
        type: String,
        required: true,

        
      }, 
      price: {
        type: Number,
        required: true,

        
      }, 


})

module.exports = mongoose.model('Rooms',roomSchema)