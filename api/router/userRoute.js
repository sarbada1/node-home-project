import express from 'express';

import UserController from "../controller/UserController.js";

const userRoute= express.Router();
const userInstance=new UserController();

userRoute.get('/',userInstance.index);

userRoute.post('/',userInstance.store);

userRoute.get('/:id', userInstance.show);

userRoute.delete('/:id', userInstance.destroy);

userRoute.put("/:id", userInstance.update);



export default userRoute;