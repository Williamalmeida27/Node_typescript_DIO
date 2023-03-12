export interface IUser{
    name: string,
    email: string
}

const db = [ //Simulando um banco de dados, apenas um array com m objeto
    {
        "name": "William",
        "email": "William@gmail.com"
    }
]


export class UserService{ //Aqui é uma classe de service para toda a aplicação
    //Criando e usando um DB dentro da classe para utilização em testes

    db: IUser[]

    constructor( //O constructor é um função, que vai receber um parametro.
        database = db //Este parametro receber o db externo.
    ){//Ja a função é inicializar o db interno da classe recebendo o parametro do construtor
        this.db = database //Este db da classe recebe o database que receber 
    }

    createUser = (name: string, email: string) => { //Aqui indico um metedo que tem uma função criar um objeto com duas propriedades
        const user ={ //Propriedades seguindo modelo do DB
            name,
            email
        }

        this.db.push(user) //Adicionando no banco de dados interno da classe, que no caso é um array, os dados que vem do objeto acima
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return db
    }

    deleteUsers = (name: string, email: string) => {
        const user ={
            name,
            email
        }
        const index = this.db.indexOf(user);
        const remover = this.db.splice(index, 1)
        console.log('DB atualizado', this.db)
    }
}