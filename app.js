const express= require("express");
const app= express();
const {connectMongoDb}= require("./config/db")

// connection DB
 connectMongoDb();

 // global middleware
 app.use(express.json());

 // import routes
 app.use("/user", require("./routes/userRoute"));


module.exports= app;