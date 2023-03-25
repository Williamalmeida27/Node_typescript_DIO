import { Request } from "express"
import { UserService } from "../Services/UserService"
import { makeMockeRequest } from "../__Mocks__/mockRequest"
import { makeMockeResponse } from "../__Mocks__/mockResponse"
import { UserController } from "./UserController"

describe('UserController', ()=> {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(), //Chamando a função createuser
        getUser: jest.fn()
    } //Mock do tipo parcial de user service, e inicializar com objeto vazio.

    const userController = new UserController(mockUserService as UserService) //Istanciando a classe user controller e definindo o parametro mock do tipo userservice
    const MockResponse = makeMockeResponse()

    it('Deve adicionar um novo usuário ', () => {
        const mockRequest = {
            body: {
                name: "teste",
                email: "Teste@teste",
                password: '12345'
            }
        } as Request               
        const response = userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(201)
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário criado'})
    });

    it('Deve retornar um erro caso não informe o name ', () => {
        const mockRequest = {
            body: {
                name: "", //Para testar é só remover o nome e ver o retorno do erro
                email: "Teste@teste",
                password: '12345'
            }
        } as Request
        const response = userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(400)
        expect(MockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatórios'})
    });

    it('Deve retornar um erro caso não informe o email ', () => {
        const mockRequest = {
            body: {
                name: "teste",
                email: "", //Para testar é só remover o e-mail e ver o retorno do erro
                password: '12345'
            }
        } as Request
        const response = userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(400)
        expect(MockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatórios'})
    });

    it('Deve retornar um erro caso não informe a senha ', () => {
        const mockRequest = {
            body: {
                name: "teste",
                email: "Teste@teste", //Para testar é só remover o e-mail e ver o retorno do erro
                password: ''
            }
        } as Request
        const response = userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(400)
        expect(MockResponse.state.json).toMatchObject({message:'Bad request! Todos os campos são obrigatórios'})
        
    });

    it('Deve retornar um usuário pelo id', () => { //Teste se a rota por parametro funciona
        const mockRequest = makeMockeRequest({
            params: {
                id: '12345'
            }
        })

        userController.getUser(mockRequest, MockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('12345')
        expect(MockResponse.state.status).toBe(400)
    });


    /*

    it('Deve a lista de usuários ', () => {
        const mockRequest = makeMockeRequest({})
        userController.getUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(200)
    });

   it('Deve a retornar mesnagem de usuário deletado ', () => {
        const mockRequest = {
            body: {
                name: "teste",
                email: "teste@teste"
            }
        } as Request
        userController.deleteUsers(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(200)
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário deletado'})
    });*/
})
