import { EntityManager } from "typeorm";

interface MockManagerArgs{
    saveReturn?: object | [object],
    getUserReturn?: object
}

export const getMockManagerEntity = async ({
    saveReturn = undefined,
    getUserReturn = undefined
}: MockManagerArgs): Promise<EntityManager> => {
    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn))
    manager.findOne = jest.fn().mockImplementation(() => Promise.resolve(getUserReturn))

    return manager as EntityManager
}