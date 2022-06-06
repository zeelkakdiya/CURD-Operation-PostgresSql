
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";


export interface CountryAttributes{
    id:number,
    countryName:string,
    countryCode:string,
    createdAt?:Date,
    updatedAt?:Date
}

export interface CountryModel extends Model<CountryAttributes>,CountryAttributes{}
export class Country extends Model <CountryModel,CountryAttributes> {}

export type CountryStatic = typeof Model &{
    new (values?:object,options?:BuildOptions):CountryModel;
}

export function CountryFactory (sequelize:Sequelize):CountryStatic {
    return <CountryStatic>sequelize.define("CountryDetails",{
         id:{
           type:DataTypes.INTEGER,
           autoIncrement:true,
           primaryKey:true,
           allowNull:false
         },
         countryName:{
             type:DataTypes.STRING,
             allowNull:false
         },
         countryCode:{
             type:DataTypes.STRING,
             allowNull:false
         }
    })
}