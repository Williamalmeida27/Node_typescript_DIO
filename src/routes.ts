import { Router, Request, Response } from "express";
import { LoginController } from "./Controllers/LoginController";
import { UserController } from "./Controllers/UserController";
import { verifyAuth } from "./Midlleware/verifyAuth";


export const router = Router();

const userController = new UserController(); //Instaciando conforme POO a classe do controller para obter suas funções indicando que é uma nova classe.
const loginController = new LoginController

router.post('/user', userController.createUser )//Não levar o () pois seria necessário declarar os parametro, mas já temos por default nas funções quem são os parametros.
router.get('/user/:id',verifyAuth, userController.getUser) //Chamando todos usuários nesta rotas, outro ponto é que devemos definir um arquivo de rotas
router.delete('/user', userController.deleteUsers)//Chamando função de deletar usuário.

router.post('/login', loginController.login)