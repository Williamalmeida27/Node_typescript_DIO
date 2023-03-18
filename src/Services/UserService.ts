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

    getUser = () => {
        
    }

    getAuthenticateUser =async (email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPassword(email, password)
    }

    deleteUsers = () => {

    }
}