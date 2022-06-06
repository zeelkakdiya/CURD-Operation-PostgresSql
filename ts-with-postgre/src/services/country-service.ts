import {db} from '../config/connection'

export const getCountries = async () => {
    return await db.query('SELECT * FROM Country')
}

export const getCountryById = async(country_id:Number)=>{
    return await db.query(`SELECT * FROM country WHERE country_id=${country_id}`)
}

export const addCountry = async(country:any)=>{
   return await db.query('INSERT INTO country(countryname,countrycode) ' +
   'VALUES ($1, $2)',
   [country.countryname, country.countrycode])
}

export const updateCountry = async(id:number, country: any)=>{
    return await db.query('UPDATE country SET countryname = $1, countrycode = $2 WHERE country_id = $3',
    [country.countryname, country.countrycode, id])
}

export const deletedCountry = async(id:Number)=>{
    return await db.query(`DELETE FROM country WHERE country_id =${id}`)
}