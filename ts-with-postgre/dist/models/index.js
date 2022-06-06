"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const country_1 = require("./country");
const conn_1 = require("../config/conn");
conn_1.dbConfig.authenticate()
    .then(() => console.log('Connection established Successfully'))
    .catch((err) => console.log(err));
conn_1.dbConfig.sync({ force: false, alter: false })
    .then(() => {
    console.log('Yes resync Data');
}).catch((err) => {
    console.log(err);
});
const Country = (0, country_1.CountryFactory)(conn_1.dbConfig);
exports.Country = Country;
