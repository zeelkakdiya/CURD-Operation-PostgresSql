export interface DB{
    DATABASE:string,
    USER:string,
    PASSWORD:string,
    DB_PORT:Number,
    DB_HOST:string,
}

export const dbConfigs=<any>{
    DATABASE: 'fleetdb',
    USER: 'postgres',
    PASSWORD: 'zeel',
    DB_PORT: 5432,
    DB_HOST: 'localhost',
    pool:{
        min:0,
        max:5,
        acquire:30000,
        idle:10000
    }
}




