import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class UserRepository{
    async create(user:any) {
        const newUser = await prisma.user.create({
            data:{
                email:user.email
            }
        })
        return newUser
    }
   
}