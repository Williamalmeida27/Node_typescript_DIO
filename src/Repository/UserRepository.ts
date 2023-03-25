import { EntityManager } from "typeorm";
import { User } from "../entity/User";

export class UserRepository {
    private manager: EntityManager;

    constructor (
        manager: EntityManager
    ){
        this.manager = manager;
    }

    createUser = async (user: User): Promise<User> => {
        return this.manager.save(user)
    }

    getUser = async (Id: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                id: Id
            }
        })
    }

    getUserByEmailAndPassword = async (email:string, password:string): Promise <User | null> => {
        return this.manager.findOne(User, {
            where: {
                email,
                password
            }
        })
        
    }

}