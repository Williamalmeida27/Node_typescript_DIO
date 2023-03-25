import express, { Request, Response } from "express"; //Importando express para subir server
import { UserService } from "../Services/UserService";

export class UserController {
    userService: UserService //A propriedade desta classe tem um nome e tem um tipo lá da userservices.

    constructor( //Na construção da classe o parametro do construtor se não tiver nada ele cria um novo objeto da userservice
        userService = new UserService()
    ){
        this.userService = userService //A função do construtor é criar nesta classe o recebimento do objeto
    }

    createUser = (request: Request, response: Response) => {
        // Porém como criamos o User Service da classe não usaremos o const userService = new UserService() //Instaciando a service para utilizar nesta parte do código
        const user = request.body // Aqui estou dizendo que uma váriavel recebe um request via body, assim quando acessar o metódo post e ir no body eu posso enviar dados para criar
        
        if (!user.name || !user.email || !user.password) { //Crrando uma validação se for vazio.
            return response.status(400).json({message:'Bad request! Todos os campos são obrigatórios' }) 
            //retorne um response com código 400 e uma mensagem
        }
        
        this.userService.createUser(user.name, user.email, user.password) //Aqui estou enviado via metodo de criar os dados que vou receber via body da API
        return response.status(201).json({message: "Usuário criado"}) //Já aqui ao realizar o request o resposne vai dar uma mensagem
    }
    
    getUser = async (request: Request, response: Response) => { //Função que chama um metód do service que retorna todos os dados do db
        const {id} = request.params
        const user = await this.userService.getUser(id)
        return response.status(200).json({
            id: user?.id,
            name: user?.name,
            email: user?.email
        })
    }

    //Refatorado criado função de deletar usuário
    deleteUsers = (request: Request, response: Response) => { //Poderiamos deixar com funções no controller igual os acima.
        const user = request.body //Aqui estou recebendo os dados via body
        return response.status(200).json({message: 'Usuário deletado!'})

    }
}