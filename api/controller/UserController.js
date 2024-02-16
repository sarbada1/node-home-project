import { response } from "express";
import User from "../models/User.js";

class UserController {

    async post(req, res) {
        const data = req.body;
        await User.create(data);
        return res.status(200).json({ message: "User successfully created" });
    }

    async get(request, response) {
        const users = await User.find({});
        response.status(200).json({ users });

    }

    async getByID(req, res) {
        let id= req.params.id;
        let user= await User.findOne({_id : id});
        return res.json({user});
    }

    async delete(req, res){
        let id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({ message: "User deleted successfully" });
    }
}
export default UserController;