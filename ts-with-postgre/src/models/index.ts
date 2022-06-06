
import {CountryFactory} from './country'
import {dbConfig} from '../config/conn'

    dbConfig.authenticate()
    .then(()=> console.log('Connection established Successfully'))
    .catch((err)=>console.log(err))

    dbConfig.sync({force:false,alter:false})
    .then(()=>{
        console.log('Yes resync Data')
    }).catch((err)=>{
        console.log(err)
    })

 const Country = CountryFactory(dbConfig)

 export {Country}
