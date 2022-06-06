"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedCountry = exports.updateCountry = exports.addCountry = exports.getCountryById = exports.getCountries = void 0;
const connection_1 = require("../config/connection");
const getCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.db.query('SELECT * FROM Country');
});
exports.getCountries = getCountries;
const getCountryById = (country_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.db.query(`SELECT * FROM country WHERE country_id=${country_id}`);
});
exports.getCountryById = getCountryById;
const addCountry = (country) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.db.query('INSERT INTO country(countryname,countrycode) ' +
        'VALUES ($1, $2)', [country.countryname, country.countrycode]);
});
exports.addCountry = addCountry;
const updateCountry = (id, country) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.db.query('UPDATE country SET countryname = $1, countrycode = $2 WHERE country_id = $3', [country.countryname, country.countrycode, id]);
});
exports.updateCountry = updateCountry;
const deletedCountry = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.db.query(`DELETE FROM country WHERE country_id =${id}`);
});
exports.deletedCountry = deletedCountry;
