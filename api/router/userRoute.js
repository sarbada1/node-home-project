import express from 'express';

import UserController from "../controller/UserController.js";

const userRoute= express.Router();
const userInstance=new UserController();

userRoute.get('/',userInstance.get);

userRoute.post('/',userInstance.post);

userRoute.get('/:id', userInstance.getByID);
userRoute.delete('/:id', userInstance.delete);


export default userRoute;