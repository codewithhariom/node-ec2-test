const mongoose= require("mongoose");
const DB_URl=process.env.DB_URl;
module.exports= {
    connectMongoDb: ()=>{
        mongoose.connect(DB_URl).then(res=>{
            console.log("Connected");
        }).catch(err=>{
            console.log(err);
        })
    }
}