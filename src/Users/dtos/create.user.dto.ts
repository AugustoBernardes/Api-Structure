import Joi from "joi"

const NewUserDto = (data: any) => {
    const schema = Joi.object({
        email:Joi.string().email().trim().required(),
    })

    return schema.validate(data)
}



export default NewUserDto