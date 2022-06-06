import * as sequelize from 'sequelize'
import {dbConfigs} from './constants'


export const dbConfig = new sequelize.Sequelize(dbConfigs.DATABASE,dbConfigs.USER,dbConfigs.PASSWORD,{
    port:dbConfigs.DB_PORT,
    host:dbConfigs.DB_HOST,
    dialect:'postgres',
    pool:{
        min:dbConfigs.pool.min,
        max:dbConfigs.pool.max,
        acquire:dbConfigs.pool.acquire,
        idle:dbConfigs.pool.idle
    }
})



