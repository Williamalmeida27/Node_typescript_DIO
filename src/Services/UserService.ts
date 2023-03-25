import { sign } from "jsonwebtoken";
import { AppDataSource } from "../Database/data-source"
import { User } from "../entity/User";
import { UserRepository } from "../Repository/UserRepository"

export class UserService{ //Aqui é uma classe de service para toda a aplicação
    //Criando e usando um DB dentro da classe para utilização em testes

    private userRepository: UserRepository

    constructor(
        userRepository = new UserRepository(AppDataSource.manager)
    ){
        this.userRepository = userRepository;
    }

    createUser = async (name: string, email: string, password: string): Promise<User> => { //Aqui indico um metedo que tem uma função criar um objeto com duas propriedades
      const user = new User(name, email, password);
      
      return this.userRepository.createUser(user)
    }

    getUser = async (id: string): Promise<User | null> => {
        return this.userRepository.getUser(id)
        
    }

    getAuthenticateUser =async (email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPassword(email, password)
    }

    getToken =async (email: string, password: string): Promise<string> => {
        const user = await this.getAuthenticateUser(email, password)
        if (!user) {
            throw new Error("Email/Password inválid");
          }

        const tokenData = {
            name: user?.name,
            email: user?.email
        }

        const tokenKey = '12345789'

        const tokenOptions = {
            subject: user?.id
        }
        
        const token = sign(tokenData, tokenKey, tokenOptions)

        return token
    }

    deleteUsers = () => {

    }
}