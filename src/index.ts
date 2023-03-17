import 'reflect-metadata';
import express, { Request, Response } from "express"; //Importando express para subir server
import { router } from "./routes";
import { AppDataSource } from "./Database/data-source";

AppDataSource.initialize().then(async () => {
    console.log('Data Source inicializado!')
    
    const server = express(); //Instaciando em uma várivael o metodo do express
    server.use(express.json()) //Aqui estou indicando para o servidor a conversão dos objetos em arquivos JSON no retorno dos metodos http
    server.use(router) //Usando as rotas que estão no arquivo routes

    server.get('/', (request: Request, response: Response) => {
        return response.status(200).json({ message: 'Dio Bank API' }) //Estou informando que ao acessa essa rota e o retorno for 200 mostre a mensagem dio bank api

    }) //Gerando nossa primeira rota com metodo get

    server.listen(5000, () => console.log("Serve On"))
    


}).catch(error => console.log(error))