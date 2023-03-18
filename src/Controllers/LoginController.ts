import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const user ={
    id: '12345',
    name: 'William',
    email: 'Wiliam@gmail.com',
    password: '123456'
}

export class LoginController{

    login = async (request: Request, response: Response) => {

        const tokenData = {
            name: user.name,
            email: user.email
        }

        const tokenKey = '12345'

        const tokenOptions = {
            subject: user.id
        }
        
        const token = sign(tokenData, tokenKey, tokenOptions)

        return response.status(200).json({token})
    }
}