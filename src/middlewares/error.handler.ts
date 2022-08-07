import { Request,Response, NextFunction } from 'express';
import { logger } from '../middlewares/logger'

export function errorHandler(error:Error, request:Request, response:Response, next:NextFunction){
    if(error instanceof Error){
        return (
            logger.error(error.message),
            response.status(404),
            response.json({
                status:404,
                error:error.message
            })
        )
    }
    
    return (
        response.status(500),
        response.json({
            status:500,
            error: "Internal Server Error",
        })
    )

}