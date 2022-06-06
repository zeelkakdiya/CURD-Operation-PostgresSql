"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const countryService = __importStar(require("../services/country-service"));
const models_1 = require("../models");
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countryData = yield countryService.getCountries();
        if (!countryData.length) {
            return res.status(403).json({ status: false, message: "Countries Not-Found" });
        }
        return res.status(200).json({ status: true, message: "List Of Countries", data: countryData });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const getCountryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country_id = req.params.country_id;
        const countryData = yield countryService.getCountryById(parseInt(country_id));
        if (!countryData.length) {
            return res.status(401).json({ status: false, message: `${country_id} Is Not Valid Id` });
        }
        return res.status(200).json({ status: true, message: `Data Of Country Of ${country_id} Id`, data: countryData });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const addCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { countryname, countrycode } = req.body;
        const country = {
            countryname: countryname,
            countrycode: countrycode
        };
        const countryData = yield countryService.addCountry(country);
        console.log(countryData);
        if (!countryData) {
            return res.status(401).json({ status: false, message: "Country Details Invalid" });
        }
        return res.status(201).json({ status: true, message: "Country Was Created Successfully" });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const updateCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { countryname, countrycode } = req.body;
        const country = {
            countryname: countryname,
            countrycode: countrycode
        };
        const countryData = yield countryService.updateCountry(parseInt(id), country);
        console.log(countryData);
        if (!countryData) {
            return res.status(401).json({ status: false, message: `${id} Is Not Valid Id` });
        }
        return res.status(201).json({ status: true, message: "Country Was Updated Successfully" });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const deleteCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const countryData = yield countryService.deletedCountry(parseInt(id));
        if (!countryData) {
            return res.status(401).json({ status: false, message: `${id} Is Not Valid Id` });
        }
        return res.status(201).json({ status: true, message: "Country Was Deleted Successfully" });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const getCountryDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countryDetails = yield models_1.Country.findAll();
        if (!countryDetails.length) {
            return res.status(404).json({ status: false, message: 'Country Not-Found' });
        }
        return res.status(201).json({ status: true, message: "List of CountryDetails", data: countryDetails });
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const addCountryDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { countryName, countryCode } = req.body;
        let countryDetails = yield models_1.Country.create({
            countryName: countryName,
            countryCode: countryCode,
        });
        countryDetails = yield countryDetails.save();
        if (!countryDetails) {
            return res.status(403).json({ status: false, message: 'Country Details Invalid' });
        }
        return res.status(201).json({ status: true, message: 'Country Successfully Inserted', data: countryDetails });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: 'server error', error: error });
    }
});
const findCountyDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const countryDetails = yield models_1.Country.findOne({ where: { id: id } });
        if (!countryDetails) {
            return res.status(404).json({ status: false, message: `${id} Is Not Valid Id` });
        }
        return res.status(201).json({ status: true, message: `Data Of CountryDetails Of ${id} Id`, data: countryDetails });
    }
    catch (error) {
        console.log(error);
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const updateCountryDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const countryDetails = yield models_1.Country.update(req.body, {
            where: { id: id }
        });
        if (!countryDetails) {
            return res.status(403).json({ status: false, message: 'Country Details Invalid' });
        }
        return res.status(201).json({ status: true, message: 'CountryDetails Updated Successfully', data: countryDetails });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
const deleteCountryDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const countryDetails = yield models_1.Country.destroy({
            where: { id: id }
        });
        if (!countryDetails) {
            return res.status(403).json({ status: false, message: 'Country Details Invalid' });
        }
        return res.status(201).json({ status: true, message: 'CountryDetails Updated Successfully', data: countryDetails });
    }
    catch (error) {
        return res.status(501).json({ status: false, message: "Server error", error: error });
    }
});
exports.default = { getCountries, getCountryById, addCountry, updateCountry, deleteCountry, getCountryDetails, addCountryDetails, findCountyDetailsById, updateCountryDetails, deleteCountryDetails };
