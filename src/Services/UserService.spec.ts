import { UserService } from "./UserService";
import * as jwt from 'jsonwebtoken'
import { error } from "console";

jest.mock('../Repository/UserRepository')
jest.mock('jsonwebtoken')

const mockUserRepository = require('../Repository/UserRepository')
const mockUser = {
    id: '12345',
    name: 'William',
    email: 'William@teste',
    password: '12345'
}


describe('UserService', () => { //Criando um teste
    const userService = new UserService(mockUserRepository)

    it('Deve adicionar um usuário ', async () => { //Verificando o envio do post
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('William', 'William@teste', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({
            id: '12345',
            name: 'William',
            email: 'William@teste',
            password: '12345'
        })
    });//Ao rodar o teste ele vai trazerapenas o user do teste, pois o que tem no banco de dados é o original, e nos teste estamos usando injeção de dependência.

    it('Deve retornar um token de user ', async () => {
        jest.spyOn(userService, 'getAuthenticateUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('william@teste', 'teste')
        expect(token).toBe('token')

    });

    it('Deve retornar erro caso não encontre um usuário ', async () => {
        jest.spyOn(userService, 'getAuthenticateUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('inválid@teste.com', '12345')).rejects.toThrowError(new Error('Email/Password inválid'));

    });

});