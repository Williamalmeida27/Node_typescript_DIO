import {UserService } from "./UserService";

jest.mock('../Repository/UserRepository')

const mockUserRepository = require('../Repository/UserRepository')


describe('UserService', () => { //Criando um teste
    const userService = new UserService(mockUserRepository)
    
    it('Deve adicionar um usuário ', async () => { //Verificando o envio do post
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id: '12345',
            name: 'William',
            email: 'William@teste',
            password: '12345'
        }))
        const response = await userService.createUser('William', 'William@teste', '12345');
        expect( mockUserRepository.createUser).toHaveBeenCalled();
        expect(response).toMatchObject({
            id: '12345',
            name: 'William',
            email: 'William@teste',
            password: '12345'
        })      
    });//Ao rodar o teste ele vai trazerapenas o user do teste, pois o que tem no banco de dados é o original, e nos teste estamos usando injeção de dependência.
    
    it('Deve remover um usuário ', () => {
        
    });


});