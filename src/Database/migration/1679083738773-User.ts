import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1679083738773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'string',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'string',
                    isNullable: false
                }
            ]
        }), true,)
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users')
    }

}
