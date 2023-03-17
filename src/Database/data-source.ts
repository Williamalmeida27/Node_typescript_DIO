import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import { User1679083738773 } from "./migration/1679083738773-User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/Database/db.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [User1679083738773],
    subscribers: [],
})

