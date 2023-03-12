import { Request } from "express"
import { UserService } from "../Services/UserService"
import { makeMockeResponse } from "../__Mocks__/mockResponse"
import { UserController } from "./UserController"

describe('UserController', ()=> {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn() //Chamando a função createuser
    } //Mock do tipo parcial de user service, e inicializar com objeto vazio.

    const userController = new UserController(mockUserService as UserService) //Istanciando a classe user controller e definindo o parametro mock do tipo userservice
    const mockRequest = {
        body: {
            name: "teste",
            email: "Teste@teste"
        }
    } as Request

    it('Deve adicionar um novo usuário ', () => {
        
        const MockResponse = makeMockeResponse()
        const response = userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(201)
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário criado'})
    });

    it('Deve verificar se a função getAllUsers foi chamada ', () => {
        const MockResponse = makeMockeResponse()
        const mockAllGetUsers = userController.getAllUsers(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(201)
    });
})
