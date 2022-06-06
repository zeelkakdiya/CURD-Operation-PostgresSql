import { Request,Response } from "express";
import * as countryService  from '../services/country-service'
import {Country} from '../models'

const getCountries = async (req:Request,res:Response)=>{
try {
    const countryData = await countryService.getCountries()
    if(!countryData.length){
        return res.status(403).json({status:false,message:"Countries Not-Found"})
    }
    return res.status(200).json({status:true,message:"List Of Countries",data:countryData})
    
} catch (error) {
    return res.status(501).json({status:false,message:"Server error",error:error})
}
}

const getCountryById = async (req:Request,res:Response)=>{

    try {
      const country_id = req.params.country_id
        const countryData = await countryService.getCountryById(parseInt(country_id))
        if(!countryData.length){
            return res.status(401).json({status:false,message:`${country_id} Is Not Valid Id`})
        }
        return res.status(200).json({status:true,message:`Data Of Country Of ${country_id} Id`,data:countryData})

        
    } catch (error) {
        return res.status(501).json({status:false,message:"Server error",error:error})
    }
}

const addCountry = async (req:Request,res:Response)=>{
  try {
    const {countryname,countrycode} = req.body
    const country = {
        countryname:countryname,
        countrycode:countrycode
    }
       const countryData = await countryService.addCountry(country)
       console.log(countryData)
       if(!countryData){
        return res.status(401).json({status:false,message:"Country Details Invalid"})
    }
    return res.status(201).json({status:true,message:"Country Was Created Successfully"})

  } catch (error) {
     return res.status(501).json({status:false,message:"Server error",error:error})      
  }
}

const updateCountry = async(req:Request,res:Response)=>{

    try {
        const id = req.params.id
        const {countryname,countrycode} = req.body
        const country = {
            countryname:countryname,
            countrycode:countrycode
        }

           const countryData = await countryService.updateCountry(parseInt(id),country)
           console.log(countryData)
           if(!countryData){
                 return res.status(401).json({status:false,message:`${id} Is Not Valid Id`})

        }
            return res.status(201).json({status:true,message:"Country Was Updated Successfully"})

    
      } catch (error) {
         return res.status(501).json({status:false,message:"Server error",error:error})      
      }
}

const deleteCountry = async(req:Request,res:Response)=>{
  try {
    const id = req.params.id
      const countryData = await countryService.deletedCountry(parseInt(id))
      if(!countryData){
        return res.status(401).json({status:false,message:`${id} Is Not Valid Id`})
    }
    return res.status(201).json({status:true,message:"Country Was Deleted Successfully"})
  } catch (error) {
      return res.status(501).json({status:false,message:"Server error",error:error})
  }
}

const getCountryDetails = async(req:Request,res:Response)=>{
    try {
      const countryDetails = await Country.findAll()
      if(!countryDetails.length){
        return res.status(404).json({status:false,message:'Country Not-Found'})
      }
      return res.status(201).json({status:true,message:"List of CountryDetails",data:countryDetails})
    } catch (error) {
      console.log(error)
      return res.status(501).json({status:false,message:"Server error",error:error})
    }
}

const addCountryDetails = async(req:Request,res:Response)=>{
        try {
          const {countryName,countryCode} = req.body

          let countryDetails = await Country.create(<any>{
            countryName:countryName,
            countryCode:countryCode,
          })

          countryDetails = await countryDetails.save()

          if(!countryDetails){
            return res.status(403).json({status:false,message:'Country Details Invalid'})
          }
          return res.status(201).json({status:true,message:'Country Successfully Inserted',data:countryDetails})

        } catch (error) {
           return res.status(501).json({status:false,message:'server error',error:error})
        }
}

const findCountyDetailsById = async(req:Request,res:Response)=>{
  try {
    const id  = req.params.id
    const countryDetails = await Country.findOne({where:{id:id}})
    if(!countryDetails){
      return res.status(404).json({status:false,message:`${id} Is Not Valid Id`})
    }
    return res.status(201).json({status:true,message:`Data Of CountryDetails Of ${id} Id`,data:countryDetails})
  } catch (error) {
    console.log(error)
    return res.status(501).json({status:false,message:"Server error",error:error})
  }
}


const updateCountryDetails = async(req:Request,res:Response)=>{

try {
  const id = req.params.id

  const countryDetails = await Country.update(req.body,<any>{
      where:{id:id}
  })
  if(!countryDetails){
    return res.status(403).json({status:false,message:'Country Details Invalid'})
  }
  return res.status(201).json({status:true,message:'CountryDetails Updated Successfully',data:countryDetails})

} catch (error) {
  return res.status(501).json({status:false,message:"Server error",error:error})
}
}

const deleteCountryDetails = async(req:Request,res:Response)=>{
  try {
  const id = req.params.id
  const countryDetails = await Country.destroy({
    where:{id:id}
})
if(!countryDetails){
  return res.status(403).json({status:false,message:'Country Details Invalid'})
}
return res.status(201).json({status:true,message:'CountryDetails Updated Successfully',data:countryDetails})

  } catch (error) {
  return res.status(501).json({status:false,message:"Server error",error:error})
    
  }
}

export default {getCountries,getCountryById,addCountry,updateCountry,deleteCountry,getCountryDetails,addCountryDetails,findCountyDetailsById,updateCountryDetails,deleteCountryDetails}