const User = require("../models/userModel");

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const createUser = await User.create(req.body);
            res.status(201).send(createUser);
        } catch (error) {
            res.status(400).send({ status: false });
        }
    },
    getUser: async (req, res, next) => {
        try {
            const getUser = await User.find(req.body);
            res.status(200).send(getUser);
        } catch (error) {
            res.status(400).send({ status: false });
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const getUser = await User.findById(req.params.id);
            res.status(200).send(getUser);
        } catch (error) {
            res.status(400).send({ status: false });
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const deleteUser = await User.findByIdAndUpdate(req.params.id,{$set:{isDeleted:true}},{ new: true });
            res.status(200).send(deleteUser);
        } catch (error) {
            res.status(400).send({ status: false });
        }
    }
}