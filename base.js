const mongoose =require('mongoose');
const bd_url= "mongodb://localhost:27017/DB";
const bd= ()=>{
    mongoose.connect(bd_url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
          if (err) {
            throw err;
          }
          console.log("Database Connected...");
        }
      );
    };
    
    module.exports = bd;

