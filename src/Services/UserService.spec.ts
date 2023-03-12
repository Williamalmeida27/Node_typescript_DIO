import { IUser, UserService } from "./UserService";


describe('UserService', () => { //Criando um teste
    const mockDb: IUser[] = [] //Estou criando um mock simulando um db que tem o tipo IUser lá do service
    const userService = new UserService(mockDb); //Instanciando a classe e usando um parametro para o construtor 

    it('Deve adicionar um usuário ', () => { //Verificando o envio do post
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Teste', 'Teste@teste')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
    });//Ao rodar o teste ele vai trazerapenas o user do teste, pois o que tem no banco de dados é o original, e nos teste estamos usando injeção de dependência.
    
    it('Deve remover um usuário ', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.deleteUsers('Teste', 'Teste@teste')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
    });


});