import { UserRepository } from './user.repository'
import { logger } from '../middlewares/logger'

const userRepository = new UserRepository()

class CreateUserService{

    async execute(data:any){

       const createdUser =   await userRepository.create(data)


       return createdUser
    }
}

export { CreateUserService }