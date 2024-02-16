import { response } from "express";
import User from "../models/User.js";

class UserController {

    async store(req, res) {
        const data = req.body;
        await User.create(data);
        return res.status(200).json({ message: "User successfully created" });
    }
    async index(request, response) {
        const users = await User.find({});
        response.status(200).json({ users });
    }
    async show(req, res) {
        let id= req.params.id;
        let user= await User.findOne({_id : id});
        return res.json({user});
    }
    async destroy(req, res){
        let id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({ message: "User deleted successfully" });
    }
    async update(req,res){
        let id = req.params.id;x``
        let data = req.body;
        await User.updateOne({ _id: id },{$set: data})
        return res.status(200).json({ message: "User updated successfully" });
    }
}
export default UserController;