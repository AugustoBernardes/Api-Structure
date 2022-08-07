import { Request, Response } from 'express';

import { CreateUserService } from "./user.service"

// Dto,s
import NewUserDto from './dtos/create.user.dto';

// Service
const createUserService = new CreateUserService()
 
class CreateUserController{
    async handle(request:Request,response:Response){
    

        let data = NewUserDto(request.body)

        if(data.error){
            throw new Error(data.error.message);   
        }

        const newUser =  await createUserService.execute(data.value)

        return response.json(newUser)
    }
}

export { CreateUserController }