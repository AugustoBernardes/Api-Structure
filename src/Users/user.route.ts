import express from "express"

import { CreateUserController } from "./user.controller"

const createUserController = new CreateUserController()

const UserRoute = express.Router()

UserRoute.post("/create", createUserController.handle)

export default UserRoute 