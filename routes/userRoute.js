const express= require("express");
const {createUser,getUser, getUserById,deleteUser}= require("../controller/userController")
const route= express.Router();

route.get("/", getUser);
route.get("/:id", getUserById);
route.post("/", createUser);
route.delete("/:id", deleteUser);

module.exports= route;