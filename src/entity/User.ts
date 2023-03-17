import { randomUUID } from "crypto"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    constructor(
        
        name: string,
        email: string,
        password: string
    ){
        this.id = randomUUID()
        this.name = name,
        this.email = email,
        this.password = password

    }

}
