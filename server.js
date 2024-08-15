require('dotenv').config()
const app=require("./app");
const http= require("http");
const PORT= process.env.PORT || 3000;

const server= http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`server runing on http://localhost:${PORT}`);
})