import { DataSource } from "typeorm"

export const databaseProvider=[{
    provide: 'DATABASE_CONNECTION',
    useFactory:()=>{
        const dataSource=new DataSource({
            type:'postgres',
            host:'localhost',
            port: 5432,
            username:'postgres',
            password: '12345',
            database:'Back_nest_Angular'

        });
        return dataSource.initialize();
    }
}]