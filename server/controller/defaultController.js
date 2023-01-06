const Rooms = require('./../modals/modals')


module.exports.main= async(req,res,next)=>{
    res.send('server is running')
}

module.exports.room= async(req,res,next)=>{

const category = req.query.category


    
    try {

        const dataSchema = [
            "name",
            "category",
            "img",
            "price",
            "description"
          
          ]

        if(!category){

            const rooms = await Rooms.find({}).select(dataSchema);
              return res.send(rooms);
        }else{
            const rooms = await Rooms.find({category}).select(dataSchema);
              return res.send(rooms);
        }



        
      } catch (err) {
        next(err);
      }



}