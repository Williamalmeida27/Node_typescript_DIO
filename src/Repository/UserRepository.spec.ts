import { EntityManager } from "typeorm";
import { User } from "../entity/User";
import { getMockManagerEntity } from "../__Mocks__/mokcManagerEntity";
import { UserRepository } from "./UserRepository";

describe('User repository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        id: "0",
        name: 'William',
        email: 'Wiliam@teste',
        password: '12345'
    }

    beforeAll(async () => {
        managerMock = await getMockManagerEntity({})
        userRepository = new UserRepository (managerMock as EntityManager)
    })

    it('Deve cadastrar um novo usuário no banco de dados ', async () => {
        await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        
    });
    
});