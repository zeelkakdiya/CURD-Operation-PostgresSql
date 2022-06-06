"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const home_controllers_1 = __importDefault(require("../controllers/home-controllers"));
const country_controller_1 = __importDefault(require("../controllers/country-controller"));
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/home', home_controllers_1.default.getHome);
exports.router.get('/all', country_controller_1.default.getCountries);
exports.router.get('/filter/:country_id', country_controller_1.default.getCountryById);
exports.router.post('/add', country_controller_1.default.addCountry);
exports.router.put('/update/:id', country_controller_1.default.updateCountry);
exports.router.delete('/delete/:id', country_controller_1.default.deleteCountry);
exports.router.get('/CountryDetails', country_controller_1.default.getCountryDetails);
exports.router.post('/addDetails', country_controller_1.default.addCountryDetails);
exports.router.get('/filterById/:id', country_controller_1.default.findCountyDetailsById);
exports.router.put('/updateDetails/:id', country_controller_1.default.updateCountryDetails);
exports.router.delete('/deleteDetails/:id', country_controller_1.default.deleteCountryDetails);
