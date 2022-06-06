"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryFactory = exports.Country = void 0;
const sequelize_1 = require("sequelize");
class Country extends sequelize_1.Model {
}
exports.Country = Country;
function CountryFactory(sequelize) {
    return sequelize.define("CountryDetails", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        countryName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        countryCode: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    });
}
exports.CountryFactory = CountryFactory;
