import express from 'express'
import controller from '../controllers/home-controllers'
import countryController from '../controllers/country-controller'


export const router = express.Router({
    strict:true
})

router.get('/home', controller.getHome);

router.get('/all',countryController.getCountries)

router.get('/filter/:country_id',countryController.getCountryById)

router.post('/add',countryController.addCountry)

router.put('/update/:id',countryController.updateCountry)

router.delete('/delete/:id',countryController.deleteCountry)

router.get('/CountryDetails',countryController.getCountryDetails)

router.post('/addDetails',countryController.addCountryDetails)

router.get('/filterById/:id',countryController.findCountyDetailsById)

router.put('/updateDetails/:id',countryController.updateCountryDetails)

router.delete('/deleteDetails/:id',countryController.deleteCountryDetails)